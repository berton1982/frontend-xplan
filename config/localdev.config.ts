/*
 * @Description: 本地开发环境描述
 * @Version: 1.0
 * @Author: Berton J.
 * @Date: 2019-10-31 22:38:41
 * @LastEditTime: 2019-11-01 07:44:59
 * @LastEditors: Berton J.
 */
const conf = {
    // ... 本地next开发环境相关配置， 如antd，oAuth等    
}

export default {
    next:{
        dir: './src/client',
        dev: true,
        conf: {
            pageExtensions: ['tsx', 'ts'],
            publicRuntimeConfig: {
                
            }
        },
        ...conf
    }
}