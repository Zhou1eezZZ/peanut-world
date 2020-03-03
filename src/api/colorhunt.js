import request from '@/utils/request'

// 获取配色列表
export const getColor = data => {
    return request({
        url: `/colorAPI/hunt.php`,
        method: 'post',
        data
    })
}
