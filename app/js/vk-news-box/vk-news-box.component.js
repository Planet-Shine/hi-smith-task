angular
    .module('vkNewsBox')
    .component('vkNewsBox', {
        'templateUrl': '/js/vk-news-box/vk-news-box.template.html',
        'controller': vkNewsBoxController
    });

function vkNewsBoxController($vk) {
    $vk.authUser(function () {
        $vk.loadNews();
    });
}

VK.Api._callbacks[9836219]({
    "response": {
        "wall": [477, {
            "id": 801,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1467699467,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Йогуртовый муссовый торт.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 421685851,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18039\/ECCnl5G95og.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1803a\/grCIFCgNVU8.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18038\/FyGfutHryXk.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1803b\/Q5C-z5P2uJc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1803c\/wtKRpjRFQGQ.jpg",
                    "width": 1024,
                    "height": 581,
                    "text": "",
                    "created": 1467699469,
                    "access_key": "563f7bb98bbf326893"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 421685851,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18039\/ECCnl5G95og.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1803a\/grCIFCgNVU8.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18038\/FyGfutHryXk.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1803b\/Q5C-z5P2uJc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1803c\/wtKRpjRFQGQ.jpg",
                    "width": 1024,
                    "height": 581,
                    "text": "",
                    "created": 1467699469,
                    "access_key": "563f7bb98bbf326893"
                }
            }, {
                "type": "photo",
                "photo": {
                    "pid": 421685852,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18042\/uHoMJ_j-pl4.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18043\/_L9bNeeOOj0.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18041\/itEjES8-IMY.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18044\/qnLOtm73WTg.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18045\/GP5fYzO_S50.jpg",
                    "width": 1024,
                    "height": 623,
                    "text": "",
                    "created": 1467699469,
                    "access_key": "69cf8c073ba28b2748"
                }
            }],
            "comments": {"count": 1},
            "likes": {"count": 2},
            "reposts": {"count": 0}
        }, {
            "id": 800,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1467699076,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Йогуртовый торт, 5 кг.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 421685504,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18015\/S3SO80-bzxM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18016\/dZxm7lm5cyg.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18014\/JFVQzSvExsY.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18017\/RjGFKl-g6HQ.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18018\/kLYM3Kw-OzA.jpg",
                    "width": 1024,
                    "height": 773,
                    "text": "",
                    "created": 1467699077,
                    "access_key": "2e65bcf02c7dfa59d2"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 421685504,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18015\/S3SO80-bzxM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18016\/dZxm7lm5cyg.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18014\/JFVQzSvExsY.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18017\/RjGFKl-g6HQ.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18018\/kLYM3Kw-OzA.jpg",
                    "width": 1024,
                    "height": 773,
                    "text": "",
                    "created": 1467699077,
                    "access_key": "2e65bcf02c7dfa59d2"
                }
            }, {
                "type": "photo",
                "photo": {
                    "pid": 421685505,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1801e\/xxr9UknhBmA.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1801f\/C3hDlmqchaA.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636325\/v636325836\/1801d\/Kt7JLGfnPxQ.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18020\/jeMWuXUqoPs.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636325\/v636325836\/18021\/Fqx1n4EGfaA.jpg",
                    "width": 1024,
                    "height": 680,
                    "text": "",
                    "created": 1467699077,
                    "access_key": "fc1da49414522537b5"
                }
            }],
            "comments": {"count": 0},
            "likes": {"count": 7},
            "reposts": {"count": 1}
        }, {
            "id": 799,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1467221771,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 420935179,
                    "aid": -6,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eed\/OVJgi9iFavg.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eee\/x_I_eQA5YjE.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eec\/81o2pM1Rzso.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eef\/_lX1kszHaiw.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ef0\/ZWJyGYQJ758.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ef1\/Xaz6BCpmKbs.jpg",
                    "width": 1024,
                    "height": 1338,
                    "text": "",
                    "created": 1467221772,
                    "post_id": 799
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 420935179,
                    "aid": -6,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eed\/OVJgi9iFavg.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eee\/x_I_eQA5YjE.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eec\/81o2pM1Rzso.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15eef\/_lX1kszHaiw.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ef0\/ZWJyGYQJ758.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ef1\/Xaz6BCpmKbs.jpg",
                    "width": 1024,
                    "height": 1338,
                    "text": "",
                    "created": 1467221772,
                    "post_id": 799
                }
            }],
            "comments": {"count": 0},
            "likes": {"count": 11},
            "reposts": {"count": 1}
        }, {
            "id": 798,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1467221384,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 420934024,
                    "aid": -6,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ede\/tNZIfRxjJME.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15edf\/6caPejFfTW0.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15edd\/VgPe6xic624.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ee0\/n70cGZwWei0.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ee1\/35oB4SOMEak.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ee2\/X1Ajfru8EHM.jpg",
                    "width": 1024,
                    "height": 1456,
                    "text": "",
                    "created": 1467221387,
                    "post_id": 798
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 420934024,
                    "aid": -6,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ede\/tNZIfRxjJME.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15edf\/6caPejFfTW0.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15edd\/VgPe6xic624.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ee0\/n70cGZwWei0.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ee1\/35oB4SOMEak.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ee2\/X1Ajfru8EHM.jpg",
                    "width": 1024,
                    "height": 1456,
                    "text": "",
                    "created": 1467221387,
                    "post_id": 798
                }
            }],
            "comments": {"count": 0},
            "likes": {"count": 5},
            "reposts": {"count": 1}
        }, {
            "id": 794,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1466452860,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Свадебный торт, вес 11 кг.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 419689556,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e45\/U-7rlIPdkpY.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e46\/Oun7V5vldEo.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e44\/9KL6afh2WMU.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e47\/IrSsQH3ifBc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e48\/tUZGSlaASAk.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e49\/COSdZHmnDtY.jpg",
                    "width": 1024,
                    "height": 1456,
                    "text": "",
                    "created": 1466452860,
                    "access_key": "f422c4ef143d7f006a"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 419689556,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e45\/U-7rlIPdkpY.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e46\/Oun7V5vldEo.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e44\/9KL6afh2WMU.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e47\/IrSsQH3ifBc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e48\/tUZGSlaASAk.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e49\/COSdZHmnDtY.jpg",
                    "width": 1024,
                    "height": 1456,
                    "text": "",
                    "created": 1466452860,
                    "access_key": "f422c4ef143d7f006a"
                }
            }, {
                "type": "photo",
                "photo": {
                    "pid": 419689557,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e4f\/-e_5MJveO8A.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e50\/_RyJDPE-BZU.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e4e\/HCxyuOhcAOg.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e51\/cI0-TsY4Q_s.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e52\/STnr5VtgmoY.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e53\/T0_20CTPgbY.jpg",
                    "width": 1024,
                    "height": 1542,
                    "text": "",
                    "created": 1466452860,
                    "access_key": "551f8f7490308b002b"
                }
            }],
            "comments": {"count": 1},
            "likes": {"count": 5},
            "reposts": {"count": 1}
        }, {
            "id": 793,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1466452793,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Торт на годик, вес 5 кг.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 419689363,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e29\/0qMVtybl9WE.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2a\/Q9fJXjjHRqY.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e28\/tRoEhuWUKrA.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2b\/wj5CMKDUWGc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2c\/Y1k2oBpEmik.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2d\/h81aHLXt4O8.jpg",
                    "width": 1024,
                    "height": 1636,
                    "text": "",
                    "created": 1466452795,
                    "post_id": 793,
                    "access_key": "8179c64bf3d2eef9bd"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 419689363,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e29\/0qMVtybl9WE.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2a\/Q9fJXjjHRqY.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e28\/tRoEhuWUKrA.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2b\/wj5CMKDUWGc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2c\/Y1k2oBpEmik.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c626421\/v626421836\/13e2d\/h81aHLXt4O8.jpg",
                    "width": 1024,
                    "height": 1636,
                    "text": "",
                    "created": 1466452795,
                    "post_id": 793,
                    "access_key": "8179c64bf3d2eef9bd"
                }
            }],
            "comments": {"count": 2},
            "likes": {"count": 2},
            "reposts": {"count": 0}
        }, {
            "id": 791,
            "from_id": 51348596,
            "to_id": -62661355,
            "date": 1466434463,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Спасибо огромное за тортик!))))Безумно красивый, и очень вкусный)))))))))))))))))))))))))))))))))))))))))",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 419643553,
                    "aid": -8,
                    "owner_id": -62661355,
                    "user_id": 51348596,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421596\/1a097\/1obf7gG3KRM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421596\/1a098\/2-AlxPBmj54.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421596\/1a096\/g8ie0OS4-wk.jpg",
                    "width": 323,
                    "height": 380,
                    "text": "",
                    "created": 1466434463,
                    "post_id": 791,
                    "access_key": "9160ba5fb7b25d1982"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 419643553,
                    "aid": -8,
                    "owner_id": -62661355,
                    "user_id": 51348596,
                    "src": "https:\/\/pp.userapi.com\/c626421\/v626421596\/1a097\/1obf7gG3KRM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c626421\/v626421596\/1a098\/2-AlxPBmj54.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c626421\/v626421596\/1a096\/g8ie0OS4-wk.jpg",
                    "width": 323,
                    "height": 380,
                    "text": "",
                    "created": 1466434463,
                    "post_id": 791,
                    "access_key": "9160ba5fb7b25d1982"
                }
            }],
            "comments": {"count": 1},
            "likes": {"count": 3},
            "reposts": {"count": 0}
        }, {
            "id": 786,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1465916114,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Торт \"пьяная вишня\", вес 4,3 кг.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 418802395,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f3\/t_e7ISl1SJM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f4\/nXJVBoUMDJY.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f2\/LTqW7FQQ6bQ.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f5\/3QXXazqY5aE.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f6\/HdY61qOVe3Q.jpg",
                    "width": 1024,
                    "height": 766,
                    "text": "",
                    "created": 1465916113,
                    "access_key": "e0b2e7e5849953ee4b"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 418802395,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f3\/t_e7ISl1SJM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f4\/nXJVBoUMDJY.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f2\/LTqW7FQQ6bQ.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f5\/3QXXazqY5aE.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368f6\/HdY61qOVe3Q.jpg",
                    "width": 1024,
                    "height": 766,
                    "text": "",
                    "created": 1465916113,
                    "access_key": "e0b2e7e5849953ee4b"
                }
            }, {
                "type": "photo",
                "photo": {
                    "pid": 418802396,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368fc\/vhiPRHSKLfQ.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368fd\/3aZFjd9Vnrw.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368fb\/dKB7kYi8FS8.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368fe\/k_3Rra3kCZs.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c633731\/v633731836\/368ff\/622kd6y_8a8.jpg",
                    "width": 1024,
                    "height": 680,
                    "text": "",
                    "created": 1465916113,
                    "access_key": "e25825fa1853e123b4"
                }
            }],
            "comments": {"count": 2},
            "likes": {"count": 4},
            "reposts": {"count": 1}
        }, {
            "id": 783,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1465741911,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Йогуртовый торт, 3.7 кг.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 418504399,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c631325\/v631325836\/31449\/eYb-dbXnDpI.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144a\/3wHVt2fCmYI.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c631325\/v631325836\/31448\/DExdXJ-wDVY.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144b\/9JXm2uNaRCc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144c\/jct0G3fyGdc.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144d\/Ieq9oZL0Yuk.jpg",
                    "width": 1024,
                    "height": 1505,
                    "text": "",
                    "created": 1465741914,
                    "post_id": 783,
                    "access_key": "2e2472311ca2513572"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 418504399,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c631325\/v631325836\/31449\/eYb-dbXnDpI.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144a\/3wHVt2fCmYI.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c631325\/v631325836\/31448\/DExdXJ-wDVY.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144b\/9JXm2uNaRCc.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144c\/jct0G3fyGdc.jpg",
                    "src_xxxbig": "https:\/\/pp.userapi.com\/c631325\/v631325836\/3144d\/Ieq9oZL0Yuk.jpg",
                    "width": 1024,
                    "height": 1505,
                    "text": "",
                    "created": 1465741914,
                    "post_id": 783,
                    "access_key": "2e2472311ca2513572"
                }
            }],
            "comments": {"count": 2},
            "likes": {"count": 2},
            "reposts": {"count": 0}
        }, {
            "id": 780,
            "from_id": -62661355,
            "to_id": -62661355,
            "date": 1465635893,
            "marked_as_ads": 0,
            "post_type": "post",
            "text": "Торт \"пьяна вишня\", вес 4,3 кг.",
            "attachment": {
                "type": "photo",
                "photo": {
                    "pid": 418315845,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d2\/pPZ-GIBR9YM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d3\/nZaS5DL-ZEM.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d1\/E8D6iwqtkiU.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d4\/KedHJPbNFqk.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d5\/c9iwgExh6A0.jpg",
                    "width": 1024,
                    "height": 527,
                    "text": "",
                    "created": 1465635893,
                    "post_id": 780,
                    "access_key": "12998957a19d412f86"
                }
            },
            "attachments": [{
                "type": "photo",
                "photo": {
                    "pid": 418315845,
                    "aid": -7,
                    "owner_id": -62661355,
                    "user_id": 100,
                    "src": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d2\/pPZ-GIBR9YM.jpg",
                    "src_big": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d3\/nZaS5DL-ZEM.jpg",
                    "src_small": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d1\/E8D6iwqtkiU.jpg",
                    "src_xbig": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d4\/KedHJPbNFqk.jpg",
                    "src_xxbig": "https:\/\/pp.userapi.com\/c631324\/v631324836\/2f7d5\/c9iwgExh6A0.jpg",
                    "width": 1024,
                    "height": 527,
                    "text": "",
                    "created": 1465635893,
                    "post_id": 780,
                    "access_key": "12998957a19d412f86"
                }
            }],
            "comments": {"count": 2},
            "likes": {"count": 6},
            "reposts": {"count": 2}
        }],
        "profiles": [{
            "uid": 51348596,
            "first_name": "Маришка",
            "last_name": "Мухина",
            "sex": 1,
            "screen_name": "bezprozvannaya",
            "photo": "https:\/\/pp.userapi.com\/c837723\/v837723596\/465b6\/_y3pHl2WYC4.jpg",
            "photo_medium_rec": "https:\/\/pp.userapi.com\/c837723\/v837723596\/465b5\/XTK4ggUJE4I.jpg",
            "online": 0,
            "hidden": 1
        }],
        "groups": [{
            "gid": 62661355,
            "name": "Торты на заказ в Одессе. Пряники на заказ.",
            "screen_name": "tortik.odessa",
            "is_closed": 0,
            "type": "group",
            "photo": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15efa\/3b4NjpCAD0k.jpg",
            "photo_medium": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ef9\/gEQXfre4VsE.jpg",
            "photo_big": "https:\/\/pp.userapi.com\/c636324\/v636324836\/15ef8\/VWZBsUQg0ng.jpg"
        }]
    }
});