
/**
 * 定位用户地址,包含省市
 */
//getLocalAddress();
//getProvice();
function getLocalAddress() {

    if(branch.code == 1){
        var address_province = $.cookie('address_province') ? $.cookie('address_province') : null; //省
        var address_city = $.cookie('address_city') ? $.cookie('address_city') : null;  //市
        //var address_province = $.cookie('address_province') ? $.cookie('address_province') : "广东省"; //省
        //var address_city = $.cookie('address_city') ? $.cookie('address_city') : "广州市";  //市
        //var address_district = $.cookie('address_district') ? $.cookie('address_district') : null;  //区
    } else {
        var address_province = branch.province_id;
        var address_city = branch.city_id;
    }

    if((address_province && address_city)){
        getProvice(address_province);
        getCity(address_province, address_city, initialize=true);
    } else {
        var flag = true;
        var search_flag = true;
        var map, geolocation;
        var markers = [];
        var address_province='',address_city='',address_district='',address_lng='',address_lat='';
        //加载地图，调用浏览器定位服务
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                console.log(result)
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    var address_province = result.province;  //广东省
                    var address_city = result.city;  //广州省
                    var city_id = result.adcode; //440100
                    $.cookie('address_province', address_province);
                    $.cookie('address_city', address_city);
                    getProvice(address_province);
                    getCity(address_province, address_city, initialize=true);
                } else {
                    getProvice();
                }
            })
        });
    }
}

/**
 * IP定位获取当前城市信息,包含省市
 * 自动获取用户IP来定位
 */
function getLocalCity(callback) {
    AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                typeof callback === 'function' && callback({
                    province: result.province,
                    city: result.city,
                    city_id: result.adcode
                });
            } else {
                typeof callback === 'function' && callback({
                    province: '广东省',
                    city: '广州市',
                    city_id: '440100'
                });
            }
        })
    })
}

/**
 * IP定位获取当前城市信息,包含省市
 * 根据输入IP地址返回对应城市信息
 * @param ip
 * @param callback
 * getCityByIp("182.111.236.170",function (result) {
 *     console.log(result)
 * });
 */
function getCityByIp(ip, callback) {
    AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch();
        citySearch.getCityByIp(ip, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                typeof callback === 'function' && callback(result);
            } else {
                typeof callback === 'function' && callback({
                    province: '广东省',
                    city: '广州市',
                    city_id: '440100'
                });
            }
        })
    })
}

/**
 * 获取省/市数据
 * @param province  当前省
 */
function getProvice(province) {
    var province = province || "";  //IE function参数设置默认值报错
    console.log(province)
    //获取所有省份
    $.ajax({
        url: "/index/areas/getProvice",
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            //layer.load();
        },
        success: function (result) {
            if (result.code > 0) {
                var result = result.data;
                html = html2 = '<option value="">省/市</option>';
                r_html = "";
                for (var p in result) {
                    var selected = ((result[p].id == province) || (result[p].areaname == province)) ? "selected" : "";
                    var on = ((result[p].id == province) || (result[p].areaname == province)) ? "on" : "";
                    html += '<option ' + selected + ' value="' + result[p].id + '">' + result[p].areaname + '</option>';
                    r_html += '<li data-id="' + result[p].id + '" class="'+on+'">' + result[p].areaname + '</li>\n'
                }
                $("select[name='province_id']").html(html);
                if ($(".region-select-province").length > 0){
                    $(".region-select-province").html(r_html);
                }
                //console.log($("select[name='province_id']").find("option:selected").val())
            } else {
                layer.msg("数据加载失败");
            }
        },
        complete: function () {
            layer.closeAll('loading');
        },
        error: function (err) {
            console.log(err);
        }
    });
}

/**
 * 获取城市数据
 */
function getCity(province, city, initialize=false,region=false) {
    var province = province || "";  //IE function参数设置默认值报错
    var city = city || "";
    var $el = $el || "";
    $.ajax({
        url: "/index/areas/getCityById",
        type: "POST",
        data: {id: province},
        dataType: "json",
        beforeSend: function () {
            //layer.load(1);
        },
        success: function (result) {
            if (result.code > 0) {
                var result = result.data;
                if (region) {
                    r_html = "";
                    for (var p in result) {
                        var on = ((result[p].id == city) || (result[p].areaname == city)) ? "on" : "";
                        r_html += '<li data-id="' + result[p].id + '" class="'+on+'">' + result[p].areaname + '</li>\n'
                    }
                    $(".region-select-city").html(r_html);
                } else {
                    html = '<option value="">城区</option>';
                    for (var p in result) {
                        var selected = ((result[p].id == city) || (result[p].areaname == city)) ? "selected" : "";
                        html += '<option ' + selected + ' value="' + result[p].id + '">' + result[p].areaname + '</option>';
                    }
                    $("select.city").html(html);
                    if ($el){
                        $el.parents('.queryoffer').find("select[name='city_id']").html(html);
                    }
                    if(initialize){
                        $("select[name='city_id']").html(html);
                    }
                }

            } else {
                layer.msg("数据加载失败");
            }
        },
        complete: function () {
            layer.closeAll('loading');
        },
        error: function (err) {
            console.log(err);
        }
    })
}