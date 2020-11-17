import config from '../store/config'
import status from '../store/status'
import { IInitOption } from '../interface'

export default (params: IInitOption) => {
    Object.assign(config, params);
    try {
        let data : any = {};
        for (const key of config.sessionName!) {
          data[key] = wx.getStorageSync(key) || '';
        }
        status.session = data;
    } catch (e) {
        console.error('wx.getStorageSync:fail, can not get session.')
    }
    try {
        status.sessionExpire = wx.getStorageSync(config.sessionExpireKey || "sessionExpireKey") || Infinity;
    } catch (e) {
        console.error('wx.getStorageSync:fail, can not get sessionExpire.')
    }
}
