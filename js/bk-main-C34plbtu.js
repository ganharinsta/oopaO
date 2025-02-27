import {
    r as _0x2fc37e,
    u as _0x58186c,
    j as _0x24bc43,
    S as _0x2716fc,
    a as _0x4a4f88,
    b as _0x5d34aa,
    R as _0x504b71,
    c as _0x39fffb,
    d as _0x978bb6,
    E as _0x4c825c,
    e as _0x30a716,
    f as _0x57d6af,
    g as _0x1f2d16,
    h as _0x26fa61,
    i as _0x5e9d83,
    T as _0x938afb,
    k as _0x338034,
    l as _0x3d575f,
    m as _0x33ebfd,
    n as _0x1faf10,
    I as _0x2a3ace,
    o as _0x1cd787,
    F as _0x2c1ade,
    p as _0x5036e8,
    q as _0x35964c
} from './bk-index-wllJaDkB.js';
function v({
    reviewAmount: _0x2605eb,
    averageRating: _0x33db36
}) {
    const _0x5126d4 = _0x2fc37e['useRef'](null), _0x570d88 = _0x58186c(_0x5126d4);
    return _0x24bc43['jsx']('div', {
        'ref': _0x5126d4,
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md',
        'style': { 'justifyContent': _0x570d88 },
        'children': _0x24bc43['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x24bc43['jsx'](_0x2716fc, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x33db36
                }),
                _0x24bc43['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x2605eb,
                        ')'
                    ]
                })
            ]
        })
    });
}
function X({
    reviewAmount: _0x198466,
    averageRating: _0x49c3d3
}) {
    const _0x141671 = _0x2fc37e['useRef'](null), _0x19a564 = _0x58186c(_0x141671);
    return _0x24bc43['jsx']('div', {
        'ref': _0x141671,
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'style': { 'justifyContent': _0x19a564 },
        'children': _0x24bc43['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0x24bc43['jsx'](_0x4a4f88, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0x49c3d3
                }),
                _0x24bc43['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]',
                    'children': [
                        '(',
                        _0x198466,
                        ')'
                    ]
                })
            ]
        })
    });
}
function Y({
    theme: _0x5ea306,
    componentProps: _0x579edd
}) {
    const {
            reviewAmount: _0x2fffb6,
            averageRating: _0x4fbc74
        } = _0x579edd, _0x513956 = {
            'default': _0x24bc43['jsx'](v, {
                'reviewAmount': _0x2fffb6,
                'averageRating': _0x4fbc74
            }),
            'sol': _0x24bc43['jsx'](v, {
                'reviewAmount': _0x2fffb6,
                'averageRating': _0x4fbc74
            }),
            'classic': _0x24bc43['jsx'](v, {
                'reviewAmount': _0x2fffb6,
                'averageRating': _0x4fbc74
            }),
            'wide': _0x24bc43['jsx'](v, {
                'reviewAmount': _0x2fffb6,
                'averageRating': _0x4fbc74
            }),
            'piano': _0x24bc43['jsx'](X, {
                'reviewAmount': _0x2fffb6,
                'averageRating': _0x4fbc74
            })
        };
    return _0x513956[_0x5ea306] ?? _0x513956['default'];
}
function Z({
    theme: _0x1bf257,
    reviewAmount: _0x8fcffc,
    averageRating: _0x1e0654
}) {
    const _0x18da40 = Y({
        'theme': _0x1bf257,
        'componentProps': {
            'reviewAmount': _0x8fcffc,
            'averageRating': _0x1e0654
        }
    });
    return _0x24bc43['jsx']('div', {
        'className': 'tw-my-[0.75rem]',
        'children': _0x18da40
    });
}
const ee = async _0x33b1b0 => {
        const _0x375f29 = 'https://' + _0x33b1b0 + '/products.json?limit=250', _0x40d94d = 0x5, _0x1abafa = 0x3;
        let _0x414a01 = [], _0x26759c = !0x1;
        for (let _0x23d8b8 = 0x0; _0x23d8b8 < _0x1abafa && (await Promise['all'](new Array(_0x40d94d)['fill'](0x0)['map'](async (_0x53aa3a, _0x8a63ee) => {
                const _0x5131a5 = _0x40d94d * _0x23d8b8 + _0x8a63ee + 0x1, _0x3d3136 = _0x375f29 + '&page=' + _0x5131a5, _0x1770fb = await _0x5d34aa['get'](_0x3d3136);
                if (_0x1770fb['status'] !== 0xc8) {
                    console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0x3d3136);
                    return;
                }
                const _0x386414 = _0x1770fb['data']['products'];
                _0x414a01 = _0x414a01['concat'](_0x386414), _0x386414['length'] < 0xfa && (_0x26759c = !0x0);
            })), !_0x26759c); _0x23d8b8++);
        return _0x414a01;
    }, te = (_0x1ebfbe, _0x3f695c, _0x42300c, _0x9b6b39, _0x2ece0c, _0x3b737c) => {
        const {
            averageRating: _0xd55385,
            reviewAmount: _0x1776ed
        } = _0x1ebfbe;
        if (_0x3f695c['querySelector']('.collection-star-section[data-product-id=\x22' + _0x9b6b39 + '\x22]') || _0x2ece0c && !_0x1776ed)
            return;
        const _0x204f45 = document['createElement']('div');
        if (_0x204f45['classList']['add']('collection-star-section', 'bk-reviews', _0x42300c), _0x204f45['setAttribute']('data-product-id', _0x9b6b39), _0x204f45['style']['textAlign'] = 'inherit', _0x3b737c === 'nuvemshop' && (_0x3f695c = _0x3f695c['querySelector']('.item-link'), !_0x3f695c))
            return;
        _0x3f695c['style']['margin'] = '0';
        const _0x5740c0 = _0x3f695c['parentElement'];
        if (!_0x5740c0)
            return;
        const _0x3e23cf = _0x3f695c['nextElementSibling'];
        _0x3e23cf ? (_0x3e23cf['style']['setProperty']('margin-top', '0'), _0x5740c0['insertBefore'](_0x204f45, _0x3e23cf)) : _0x5740c0['appendChild'](_0x204f45), _0x504b71['render'](_0x24bc43['jsx'](Z, {
            'theme': _0x42300c,
            'averageRating': _0xd55385,
            'reviewAmount': _0x1776ed
        }), _0x204f45);
    }, oe = async (_0x40d520, _0x1a04c2) => {
        const _0x45a803 = new Map();
        return _0x40d520['forEach'](_0x237839 => {
            _0x45a803['set'](_0x237839['handle'], _0x237839['id']);
        }), _0x45a803;
    }, ne = async (_0xf9ec89, _0x5f55b6, _0x6a1430, _0x444112, _0x28c6fd, _0x273aab) => {
        const _0x1de9db = new Map();
        _0xf9ec89['forEach'](_0x52ebab => {
            _0x1de9db['set'](_0x52ebab['productId'], _0x52ebab);
        }), await Promise['all'](_0x5f55b6['map'](async _0x165228 => {
            var _0x5e9625, _0x7fea52, _0x185ad7;
            let _0xb5af3c;
            if (_0x273aab === 'nuvemshop')
                _0xb5af3c = _0x165228['getAttribute']('data-product-id') ?? void 0x0;
            else {
                const _0x34c042 = (_0x7fea52 = (_0x5e9625 = decodeURIComponent(_0x165228['getAttribute']('href') ?? '')['split']('/products/')) == null ? void 0x0 : _0x5e9625[0x1]) == null ? void 0x0 : _0x7fea52['split']('?')[0x0];
                if (!_0x34c042)
                    return;
                _0xb5af3c = _0x6a1430['get'](_0x34c042);
            }
            const _0x19a14b = _0xb5af3c ? _0x1de9db['get'](String(_0xb5af3c)) : null;
            if (!((_0x185ad7 = _0x165228['parentElement']) != null && _0x185ad7['querySelector']('.collection-star-section[data-product-id=\x22' + _0xb5af3c + '\x22]')) && _0x19a14b)
                return te(_0x19a14b, _0x165228, _0x444112, String(_0xb5af3c), _0x28c6fd, _0x273aab), await Promise['resolve']();
        })), _0x273aab || le();
    }, re = (_0x4c0cde, _0x18712b) => {
        let _0x45198c = [];
        const _0x2edf38 = [
                '.shopify-section[id*=\x22recently-viewed-products\x22]',
                '.shopify-section[id*=\x22recommendations\x22]',
                '.shopify-section[id*=\x22promotions\x22]'
            ], _0x2bcdc4 = _0x18712b === 'nuvemshop' ? ['div[data-product-id]'] : [
                'a[href*=\x22/products/\x22][class*=\x22title\x22]',
                '[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]',
                'a[href*=\x22/products/\x22][id*=\x22CardLink\x22]',
                'a[href*=\x22/products/\x22][class*=\x22product-link\x22]',
                'a[href*=\x22/products/\x22][class*=\x22link\x22]'
            ];
        let _0x3d63a7 = _0x2bcdc4;
        if (_0x4c0cde) {
            let _0x2208d9;
            for (const _0x5d7b2b of _0x2bcdc4)
                if (document['querySelector'](_0x5d7b2b)) {
                    _0x2208d9 = _0x5d7b2b;
                    break;
                }
            if (!_0x2208d9)
                return [];
            _0x3d63a7 = _0x2edf38['map'](_0x52e9cf => _0x52e9cf + '\x20' + _0x2208d9);
        }
        for (const _0x5d4b74 of _0x3d63a7)
            if (_0x45198c = document['querySelectorAll'](_0x5d4b74), _0x45198c['length'])
                break;
        return Array['from'](_0x45198c)['filter'](_0x1103c1 => _0x1103c1 instanceof HTMLElement);
    }, se = _0x47a0e9 => {
        const _0x611f32 = new Set();
        return _0x47a0e9['forEach'](_0xa8e8a => {
            var _0x5b4e0a, _0x2b5375;
            const _0x32b0ea = (_0x2b5375 = (_0x5b4e0a = decodeURIComponent(_0xa8e8a['getAttribute']('href') ?? '')['split']('/products/')) == null ? void 0x0 : _0x5b4e0a[0x1]) == null ? void 0x0 : _0x2b5375['split']('?')[0x0];
            _0x32b0ea && _0x611f32['add'](_0x32b0ea);
        }), _0x611f32;
    }, ie = (_0x3636d1, _0xfba180) => {
        const _0xd30954 = [];
        for (const _0x4ed0ec of _0xfba180)
            _0x3636d1['has'](_0x4ed0ec['handle']) && _0xd30954['push'](_0x4ed0ec);
        return _0xd30954;
    }, ce = _0xb8d0ad => _0xb8d0ad['map'](_0x1ee036 => _0x1ee036['id'])['sort']((_0x2948ad, _0x30592a) => Number(_0x30592a) - Number(_0x2948ad)), ae = (_0x8a7d9e, _0x57e6ae) => new _0x39fffb(_0x8a7d9e[0x0], _0x57e6ae, _0x978bb6)['getCollectionStatistics'](_0x8a7d9e), le = () => {
        const _0x497de1 = [], _0x1b9606 = [
                '.flickity-viewport:has(.collection-star-section)',
                '.product-list:has(.collection-star-section)'
            ];
        for (const _0x35c91e of _0x1b9606) {
            const _0x40c65a = document['querySelectorAll'](_0x35c91e);
            _0x497de1['push'](..._0x40c65a);
        }
        _0x497de1['length'] && _0x497de1['forEach'](_0x113d07 => {
            const _0x22b915 = _0x113d07['querySelector']('.flickity-slider\x20>\x20div');
            if (!_0x22b915)
                return;
            const _0x152ed7 = _0x22b915['offsetHeight'], _0x15c194 = _0x113d07['offsetHeight'];
            _0x152ed7 > _0x15c194 && (_0x113d07['style']['height'] = _0x152ed7 + 'px');
        });
    };
let b;
const j = new Map(), ue = async (_0x3954ee, _0x16e3a8, _0xc2639) => {
        let _0x5ac510, _0x46a572 = [], _0x493e83 = [];
        if (_0xc2639 === 'nuvemshop')
            _0x46a572 = _0x3954ee['map'](_0x33b3ce => _0x33b3ce['getAttribute']('data-product-id') ?? ''), _0x5ac510 = _0x46a572['toString'](), _0x493e83 = _0x46a572['map'](_0x1dac87 => ({
                'id': _0x1dac87,
                'handle': _0x1dac87
            }));
        else {
            const _0x440171 = se(_0x3954ee);
            b || (b = await ee(_0x16e3a8)), _0x493e83 = ie(_0x440171, b), _0x46a572 = ce(_0x493e83), _0x5ac510 = _0x46a572['toString']();
        }
        const _0x5d941a = await oe(_0x493e83);
        return j['get'](_0x5ac510) || j['set'](_0x5ac510, await ae(_0x46a572, _0x16e3a8)), {
            'statistics': j['get'](_0x5ac510),
            'productMap': _0x5d941a
        };
    };
async function de(_0x1ab070, _0x1df79a, _0x2aedf9, _0x25608e = !0x1, _0x36ddae = !0x0, _0x564485) {
    const _0x576cf2 = re(_0x1ab070, _0x564485), {
            statistics: _0x242321,
            productMap: _0x5978e0
        } = await ue(_0x576cf2, _0x1df79a, _0x564485);
    _0x36ddae && _0x2aedf9 && _0x242321 && _0x5978e0 && ne(_0x242321, _0x576cf2, _0x5978e0, _0x2aedf9, _0x25608e, _0x564485);
}
const fe = _0x37e305 => _0x37e305['filter'](_0x28f0ba => _0x28f0ba !== null)['sort']((_0x2aaaba, _0x509bc1) => !_0x2aaaba || !_0x509bc1 ? 0x0 : _0x2aaaba['compareDocumentPosition'](_0x509bc1) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1)[0x0], me = _0x20ec36 => {
        var _0x3c2ed2, _0x1ad2cb;
        const _0x49b870 = document['getElementById']('bk-review-section'), _0x408578 = document['getElementById']('auto-bk-review-section');
        if (_0x49b870 || _0x408578) {
            console['log']('returned\x20because\x20already\x20review\x20section');
            return;
        }
        let _0x161e61;
        const _0xaea82b = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
        for (const _0x3d7302 of _0xaea82b)
            if (_0x3d7302['querySelector']('h1') || _0x3d7302['querySelector']('h2')) {
                _0x161e61 = _0x3d7302;
                break;
            }
        const _0x1b68e9 = document['querySelector']('[data-store*=\x22product-detail\x22]');
        _0x1b68e9 && (_0x161e61 = _0x1b68e9);
        const _0x27d7e2 = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]'), _0x3a26e1 = _0x161e61 ? _0x161e61['parentNode'] : _0x27d7e2, _0x999cf1 = document['createElement']('div');
        _0x999cf1['classList']['add']('bk-reviews', _0x20ec36), _0x999cf1['style']['width'] = '100%', _0x999cf1['style']['height'] = 'fit-content', _0x999cf1['id'] = 'auto-bk-review-section';
        const _0x17093f = document['querySelector']('.container--flush'), _0x2c72ef = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]'), _0x7e8a44 = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]'), _0x135949 = document['querySelector']('product-recommendations'), _0x41bdb4 = document['querySelector']('.shopify-section[id*=\x22promotions\x22]'), _0x379b7e = document['querySelector']('.shopify-section[id*=\x22product-content\x22]'), _0x21db1a = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]'), _0x5abdc1 = fe([
                _0x2c72ef,
                _0x7e8a44,
                _0x135949,
                _0x41bdb4
            ]), _0x1bc283 = _0x5abdc1 == null ? void 0x0 : _0x5abdc1['parentNode'];
        _0x5abdc1 && _0x1bc283 ? (console['log']('insertBeforeSection', _0x5abdc1), _0x1bc283['insertBefore'](_0x999cf1, _0x5abdc1)) : _0x379b7e != null && _0x379b7e['nextElementSibling'] ? (console['log']('productSection', _0x379b7e), (_0x3c2ed2 = _0x379b7e['parentNode']) == null || _0x3c2ed2['insertBefore'](_0x999cf1, _0x379b7e['nextElementSibling'])) : _0x21db1a != null && _0x21db1a['nextElementSibling'] ? (console['log']('informationTabsSection', _0x21db1a), (_0x1ad2cb = _0x21db1a['parentNode']) == null || _0x1ad2cb['insertBefore'](_0x999cf1, _0x21db1a['nextElementSibling'])) : _0x17093f != null && _0x17093f['parentNode'] && _0x17093f['nextElementSibling'] ? (console['log']('containerFlush', _0x17093f), _0x17093f['parentNode']['insertBefore'](_0x999cf1, _0x17093f['nextElementSibling'])) : _0x161e61 ? _0x161e61['nextElementSibling'] ? (console['log']('after\x20targetSection'), _0x3a26e1 == null || _0x3a26e1['insertBefore'](_0x999cf1, _0x161e61['nextElementSibling'])) : (console['log']('child\x20of\x20targetSectionParent'), _0x3a26e1 == null || _0x3a26e1['appendChild'](_0x999cf1)) : _0x27d7e2 ? (console['log']('child\x20of\x20mainSection'), _0x27d7e2['appendChild'](_0x999cf1)) : console['log']('no\x20section\x20found'), _0x504b71['render'](_0x24bc43['jsx'](_0x4c825c, {
            'theme': _0x20ec36,
            'extension': 'review-section'
        }), _0x999cf1);
    }, pe = _0x1b7a38 => {
        const _0x4b785b = document['getElementById']('bk-star-section'), _0x43d59e = document['getElementById']('auto-bk-star-section');
        if (_0x4b785b || _0x43d59e) {
            console['log']('returned\x20because\x20already\x20star\x20section');
            return;
        }
        const _0x2fca1d = document['querySelector']('form#product-form\x20>\x20div.flex.flex-col.gap-4\x20>\x20div') ?? document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]'), _0x26b932 = [document['querySelector']('[data-store*=”product-name-”]') ?? (_0x2fca1d == null ? void 0x0 : _0x2fca1d['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0x2fca1d == null ? void 0x0 : _0x2fca1d['querySelector']('h2')) ?? document['querySelector']('h2')];
        document['querySelectorAll']('.small--hide\x20h1,\x20.small--hide\x20h2')['forEach'](_0x279483 => {
            _0x26b932['push'](_0x279483);
        }), _0x26b932['forEach'](_0x40d95e => {
            const _0x13c810 = _0x40d95e == null ? void 0x0 : _0x40d95e['parentElement'], _0x1ddfe8 = document['createElement']('div');
            _0x1ddfe8['classList']['add']('bk-reviews', _0x1b7a38), _0x1ddfe8['id'] = 'auto-bk-star-section', _0x40d95e && _0x13c810 && (_0x40d95e['style']['marginBottom'] = '0', _0x13c810['insertBefore'](_0x1ddfe8, _0x40d95e['nextSibling']), _0x504b71['render'](_0x24bc43['jsx'](_0x4c825c, {
                'theme': _0x1b7a38,
                'extension': 'star-section'
            }), _0x1ddfe8));
        });
    };
var Se = Object['defineProperty'], k = function (_0x44eefc, _0x555cf9) {
        return Se(_0x44eefc, 'name', {
            'value': _0x555cf9,
            'configurable': !0x0
        });
    };
function A(_0xba6543, _0x5506f5) {
    (_0x5506f5 == null || _0x5506f5 > _0xba6543['length']) && (_0x5506f5 = _0xba6543['length']);
    for (var _0x11e669 = 0x0, _0x1ba2e9 = new Array(_0x5506f5); _0x11e669 < _0x5506f5; _0x11e669++)
        _0x1ba2e9[_0x11e669] = _0xba6543[_0x11e669];
    return _0x1ba2e9;
}
function ye(_0x3efdc1) {
    if (Array['isArray'](_0x3efdc1))
        return _0x3efdc1;
}
function he(_0x3bc3bb, _0x356aab) {
    var _0x56b268 = _0x3bc3bb == null ? null : typeof Symbol < 'u' && _0x3bc3bb[Symbol['iterator']] || _0x3bc3bb['@@iterator'];
    if (_0x56b268 != null) {
        var _0x4ed308 = [], _0x37eee3 = !0x0, _0x222646 = !0x1, _0x2d770d, _0x98490f;
        try {
            for (_0x56b268 = _0x56b268['call'](_0x3bc3bb); !(_0x37eee3 = (_0x2d770d = _0x56b268['next']())['done']) && (_0x4ed308['push'](_0x2d770d['value']), !(_0x356aab && _0x4ed308['length'] === _0x356aab)); _0x37eee3 = !0x0);
        } catch (_0x30b2ed) {
            _0x222646 = !0x0, _0x98490f = _0x30b2ed;
        } finally {
            try {
                !_0x37eee3 && _0x56b268['return'] != null && _0x56b268['return']();
            } finally {
                if (_0x222646)
                    throw _0x98490f;
            }
        }
        return _0x4ed308;
    }
}
function we() {
    throw new TypeError('Invalid\x20attempt\x20to\x20destructure\x20non-iterable\x20instance.\x5cnIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.');
}
function ve(_0x3aaffa, _0x3bf6fe) {
    return ye(_0x3aaffa) || he(_0x3aaffa, _0x3bf6fe) || xe(_0x3aaffa, _0x3bf6fe) || we();
}
function xe(_0x33000c, _0x27d6ec) {
    if (_0x33000c) {
        if (typeof _0x33000c == 'string')
            return A(_0x33000c, _0x27d6ec);
        var _0x5be247 = Object['prototype']['toString']['call'](_0x33000c)['slice'](0x8, -0x1);
        if (_0x5be247 === 'Object' && _0x33000c['constructor'] && (_0x5be247 = _0x33000c['constructor']['name']), _0x5be247 === 'Map' || _0x5be247 === 'Set')
            return Array['from'](_0x5be247);
        if (_0x5be247 === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](_0x5be247))
            return A(_0x33000c, _0x27d6ec);
    }
}
function ge(_0x4b5433) {
    var _0x3815e8 = new URL(document['URL']), _0x29ac15 = !0x0, _0x420f3d = !0x1, _0x76cc8e = void 0x0;
    try {
        for (var _0x3376ee = Object['entries'](_0x4b5433)[Symbol['iterator']](), _0x16658c; !(_0x29ac15 = (_0x16658c = _0x3376ee['next']())['done']); _0x29ac15 = !0x0) {
            var _0x56733e = ve(_0x16658c['value'], 0x2), _0x2f6b70 = _0x56733e[0x0], _0x29eb74 = _0x56733e[0x1];
            _0x29eb74 ? _0x3815e8['searchParams']['set'](_0x2f6b70, _0x29eb74) : _0x3815e8['searchParams']['delete'](_0x2f6b70);
        }
    } catch (_0x466507) {
        _0x420f3d = !0x0, _0x76cc8e = _0x466507;
    } finally {
        try {
            !_0x29ac15 && _0x3376ee['return'] != null && _0x3376ee['return']();
        } finally {
            if (_0x420f3d)
                throw _0x76cc8e;
        }
    }
    return _0x3815e8['toString']();
}
k(ge, 'setUrlState');
var be = k(function (_0x15ab58) {
    _0x2fc37e['useEffect'](function () {
        var _0x4a9f3d = document['head']['querySelectorAll']('style'), _0x5bbc1e = !0x0, _0x3e2928 = !0x1, _0x34b126 = void 0x0;
        try {
            for (var _0xb2292b = _0x4a9f3d[Symbol['iterator']](), _0x5914f1; !(_0x5bbc1e = (_0x5914f1 = _0xb2292b['next']())['done']); _0x5bbc1e = !0x0) {
                var _0x39f7f7 = _0x5914f1['value'];
                if (_0x39f7f7['innerHTML'] === _0x15ab58)
                    return;
            }
        } catch (_0x2b849b) {
            _0x3e2928 = !0x0, _0x34b126 = _0x2b849b;
        } finally {
            try {
                !_0x5bbc1e && _0xb2292b['return'] != null && _0xb2292b['return']();
            } finally {
                if (_0x3e2928)
                    throw _0x34b126;
            }
        }
        var _0x1a46d3 = document['createElement']('style');
        _0x1a46d3['innerHTML'] = _0x15ab58, document['head']['appendChild'](_0x1a46d3);
    }, [_0x15ab58]);
}, 'useStyleInjection');
function je(_0x1d97eb, _0x990a2f) {
    const _0x3bb044 = new MutationObserver(_0x990a2f);
    return _0x3bb044['observe'](_0x1d97eb, {
        'childList': !0x0,
        'subtree': !0x0
    }), _0x3bb044;
}
const Ee = _0x50ec7e => {
    if (!_0x50ec7e)
        return;
    const _0x12d695 = '.bk-reviews\x20>\x20*\x20{' + Object['entries'](_0x50ec7e)['filter'](([_0x4aace0]) => _0x4aace0['includes']('Color'))['map'](([_0x502d17, _0x5d7b38]) => _0x5d7b38 && '--twc-' + _0x502d17['split']('Color')[0x0] + ':\x20' + _0x3d575f(_0x5d7b38)['slice'](0x4, -0x1)['replaceAll'](',', ''))['join'](';\x20') + ';}';
    be(_0x12d695);
};
function Ce() {
    const _0x347f53 = _0x30a716(), _0x539ded = _0x57d6af(), _0x2a975f = _0x1f2d16(_0x539ded), _0x17d993 = _0x26fa61(_0x539ded), {reviewStatistics: _0x3abc56} = _0x2fc37e['useContext'](_0x5e9d83), {
            theme: _0x34ac6a,
            setTheme: _0x5310e3,
            themePreferences: _0x5d3be3,
            setThemePreferences: _0x21ad47
        } = _0x2fc37e['useContext'](_0x938afb);
    _0x338034(), Ee(_0x5d3be3);
    const _0x2ae00b = !(_0x3abc56 != null && _0x3abc56['reviewAmount']) && (_0x5d3be3 == null ? void 0x0 : _0x5d3be3['starsWithoutReviews']) === !0x1;
    return _0x2fc37e['useEffect'](() => {
        if (!_0x2a975f)
            return;
        ((async () => {
            try {
                const {
                    theme: _0x4bf90e,
                    theme_preferences: _0x442a21
                } = await _0x347f53['getStorePreferences']();
                if (_0x5310e3(_0x4bf90e), !_0x442a21 || !_0x21ad47)
                    return;
                _0x21ad47(_0x442a21);
                const _0x4aa3a2 = () => de(!!_0x17d993, _0x2a975f, _0x4bf90e, (_0x442a21 == null ? void 0x0 : _0x442a21['starsWithoutReviews']) === !0x1, (_0x442a21 == null ? void 0x0 : _0x442a21['starsInBox']) !== !0x1, _0x539ded);
                _0x4aa3a2(), setTimeout(() => je(window['document']['body'], _0x4aa3a2), 0x3e8);
            } catch {
                _0x5310e3('default');
            }
        })());
    }, [
        _0x539ded,
        _0x17d993,
        _0x5310e3,
        _0x21ad47,
        _0x2a975f
    ]), _0x2fc37e['useEffect'](() => {
        var _0x341474;
        _0x2a975f && _0x17d993 && _0x34ac6a && _0x3abc56 && ((_0x341474 = document['querySelector']('#bk-reviews-root')) == null || _0x341474['setAttribute']('data-theme', _0x34ac6a), _0x2ae00b || (pe(_0x34ac6a), me(_0x34ac6a)));
    }, [
        _0x34ac6a,
        _0x3abc56,
        _0x2a975f,
        _0x17d993,
        _0x2ae00b
    ]), !0x1 && _0x34ac6a !== void 0x0 ? _0x24bc43['jsxs'](_0x24bc43['Fragment'], {
        'children': [
            _0x24bc43['jsx'](_0x4c825c, {
                'theme': _0x34ac6a,
                'extension': 'star-section'
            }),
            _0x24bc43['jsx'](_0x4c825c, {
                'theme': _0x34ac6a,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x33ebfd['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0x24bc43['jsx'](_0x1faf10['StrictMode'], {
    'children': _0x24bc43['jsx'](_0x2a3ace, {
        'i18n': _0x1cd787,
        'children': _0x24bc43['jsx'](_0x2c1ade, { 'children': _0x24bc43['jsx'](_0x5036e8, { 'children': _0x24bc43['jsx'](_0x35964c, { 'children': _0x24bc43['jsx'](Ce, {}) }) }) })
    })
}));