import { Map } from 'immutable';
import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_PLAY_LIST,
    CHANGE_SEQUENCE_INDEX,
    CHANGE_LYRIC_LIST,
    CHANGE_CURRENT_LYRIC_INDEX
} from './constans';

const initStore = Map({
    // 当前播放信息
    currentSong: {},
    // 播放列表数据
    playList: [
        {
            "name": "黄昏 (女声版)(DJ歌者达达版)",
            "id": 1480350899,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 33211729,
                    "name": "抖音热歌DJ",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 0,
            "v": 1,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 0,
                "name": "",
                "picUrl": "https://p1.music.126.net/HET7aepe9gLrugmTo4gtqw==/109951166361057869.jpg",
                "tns": [],
                "pic_str": "109951166361057869",
                "pic": 109951166361057870
            },
            "dt": 365453,
            "h": null,
            "m": null,
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 5847711,
                "vd": -78888
            },
            "a": null,
            "cd": "01",
            "no": 0,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 262144,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 1,
            "songJumpInfo": null,
            "single": 1,
            "noCopyrightRcmd": null,
            "mst": 9,
            "cp": 0,
            "rtype": 0,
            "rurl": null,
            "mv": 0,
            "publishTime": 0
        },
        {
            "name": "匿名万岁",
            "id": 1890616371,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 9272,
                    "name": "孙燕姿",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 135414214,
                "name": "匿名万岁",
                "picUrl": "https://p2.music.126.net/OI5PaJ0yjh0LKn8-_drbkQ==/109951166566125678.jpg",
                "tns": [],
                "pic_str": "109951166566125678",
                "pic": 109951166566125680
            },
            "dt": 168176,
            "h": {
                "br": 320002,
                "fid": 0,
                "size": 6728142,
                "vd": -39022
            },
            "m": {
                "br": 192002,
                "fid": 0,
                "size": 4036902,
                "vd": -36487
            },
            "l": {
                "br": 128002,
                "fid": 0,
                "size": 2691283,
                "vd": -34773
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270336,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 4,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7003,
            "mv": 14453421,
            "publishTime": 1635436800000
        },
        {
            "name": "在惊涛骇浪里",
            "id": 1890453466,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 5538,
                    "name": "汪苏泷",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "大型纪录片《紫禁城》主题歌"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 4,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 135381191,
                "name": "在惊涛骇浪里",
                "picUrl": "https://p1.music.126.net/2NiM6YKAZ0gTIviR-qo1yA==/109951166563956911.jpg",
                "tns": [],
                "pic_str": "109951166563956911",
                "pic": 109951166563956910
            },
            "dt": 224135,
            "h": {
                "br": 320002,
                "fid": 0,
                "size": 8967405,
                "vd": -62311
            },
            "m": {
                "br": 192002,
                "fid": 0,
                "size": 5380461,
                "vd": -59622
            },
            "l": {
                "br": 128002,
                "fid": 0,
                "size": 3586989,
                "vd": -58453
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 4,
            "songJumpInfo": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 22036,
            "mv": 14452674,
            "publishTime": 1635436800000
        }
    ],
    // 当前播放下标
    currentSongIndex: 0,
    // 播放顺序
    sequence: 0, //0是顺序播放，1是随机播放，2是单曲循环
    lyricList: [], //分割后的歌词
    currentLyricIndex: 0, //当前歌词位置
});

function reducer(state = initStore, action) {
    switch (action.type) {
        case CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.currentSongIndex);
        case CHANGE_SEQUENCE_INDEX:
            return state.set("sequence", action.sequence);
        case CHANGE_LYRIC_LIST:
            return state.set("lyricList", action.lyricList);
        case CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.currentLyricIndex)
        default:
            return state;
    }
}

export default reducer;