module.exports = {
    api: "/bestbuy-app-server-cloud-server/api/jumpnewwindow",
    response: function (req, res) {
        res.json(
            {
                "code": "00000",
                "message":"操作成功",
                "value": {
                        "pageIndex": 1,
                        "pageSize": 10,
                        "beginPage": 1,
                    "rows":
                            [
                                {
                                    "appVersionId": 25,
                                    "appVersionNo": "qq.qqq.qq",
                                    "appClientType": 1,
                                    "appSystemType": 1,
                                    "appUpdateTitle": "qqq",
                                    "appUpdateContent": "qq",
                                    "isForceUpdate": false,
                                    "startTime": 1550533520000,
                                    "status": 0
                                }, {
                                "appVersionId": 24,
                                "appVersionNo": "qw.qwq.qqw",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "qqq",
                                "appUpdateContent": "qqq",
                                "isForceUpdate": false,
                                "startTime": 1550533107000,
                                "status": 0
                            }, {
                                "appVersionId": 23,
                                "appVersionNo": "1.1.1sa",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "111",
                                "appUpdateContent": "111",
                                "isForceUpdate": false,
                                "startTime": 1550532731000,
                                "status": 0
                            }, {
                                "appVersionId": 22,
                                "appVersionNo": "1.1.1",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "11",
                                "appUpdateContent": "11",
                                "isForceUpdate": true,
                                "startTime": 1550526463000,
                                "status": 0
                            }, {
                                "appVersionId": 20,
                                "appVersionNo": "4.2.1",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "这是一个测试的标题",
                                "appUpdateContent": "这个是一个测试内容",
                                "isForceUpdate": false,
                                "startTime": 1550430401000,
                                "status": 1
                            }, {
                                "appVersionId": 18,
                                "appVersionNo": "3.2.0",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "有新版本",
                                "appUpdateContent": "优化申请流程",
                                "isForceUpdate": false,
                                "startTime": 1545660000000,
                                "status": 0
                            }, {
                                "appVersionId": 17,
                                "appVersionNo": "3.1.3",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "有新版本",
                                "appUpdateContent": "优化申请流程",
                                "isForceUpdate": true,
                                "startTime": 1544166418000,
                                "status": 0
                            }, {
                                "appVersionId": 15,
                                "appVersionNo": "3.1.2",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "111",
                                "appUpdateContent": "111",
                                "isForceUpdate": true,
                                "startTime": 1532442419000,
                                "status": 0
                            }, {
                                "appVersionId": 14,
                                "appVersionNo": "3.1.0",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "欢迎下载新版本",
                                "appUpdateContent": "新版本上线了任买商城，美妆、手机数码、电脑等应有尽有，欢迎更新后使用",
                                "isForceUpdate": false,
                                "startTime": 1532442419000,
                                "status": 0
                            }, {
                                "appVersionId": 12,
                                "appVersionNo": "3.1.1",
                                "appClientType": 1,
                                "appSystemType": 1,
                                "appUpdateTitle": "欢迎下载新版本",
                                "appUpdateContent": "新版本上线了任买商城，美妆、手机数码、电脑等应有尽有，欢迎更新后使用",
                                "isForceUpdate": false,
                                "startTime": 1532442419000,
                                "status": 0
                            }
                            ],
                        "total":14
                    }
                ,
                "extraInfo":null
            }
        );
    }
};



