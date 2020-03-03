import request from '@/utils/request'

export function getColor(data) {
    return request({
        url: `/colorAPI/hunt.php`,
        method: 'post',
        data
    })
}

const ColorHuntAPI = {
    getColor
}

export default ColorHuntAPI
