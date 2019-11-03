/*
 * @Description: 读取环境配置
--->    后期改造成从远程配置库读取配置
--->    .env将改造成为只包含配置仓库的基本链接信息,然后通过dotexpand扩展,读取后，
--->    应将其从环境变量中删除，防止信息扩散(process是全局变量)
--->        protocal: http/https
--->        cert:...
--->        config_service_url: ...
--->        config_name: prod/dev/uat/...
 * @Version: 1.0
 * @Author: Berton J.
 * @Date: 2019-10-31 07:49:59
 * @LastEditTime: 2019-11-01 07:46:26
 * @LastEditors: Berton J.
 */

 // todo: 配置管理后期再考虑，主要采用12 factors
// import dotenv from 'dotenv'
// import path from 'path'
import { ServerConstructor } from 'next/dist/next-server/server/next-server'

import defaultConf from './default.config';
import devConf from './dev.config';
import prodConf from './production.config';
import localConf from './localdev.config';


export interface IConfig {
    // keys: string[],
    next?: ServerConstructor
}

// dotenv.config({
//     path: path.resolve(process.cwd(), '.env'),
//     encoding: 'utf8'
// })

const env = process.env.NEXT_ENV

const getConfig = () =>{
    if(env && env === 'prod'){
        return {
            ...defaultConf,
            ...prodConf
        }
    }
    
    if(env && env === 'dev'){
        return {
            ...defaultConf,
            ...devConf
        }
    }
    
    return {
        ...defaultConf,
        ...localConf
    }
}

const config:IConfig = getConfig();

export default config;