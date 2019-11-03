/*
 * @Description: 生产环境配置
 * @Version: 1.0
 * @Author: Berton J.
 * @Date: 2019-10-31 22:38:41
 * @LastEditTime: 2019-11-01 07:45:50
 * @LastEditors: Berton J.
 */
const conf = {
    // ... next开发环境相关配置， 如antd，oAuth等    
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