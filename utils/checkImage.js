export  const checkImageURL = (url)=>{
    if(!url) return false

    const pattern  = new RegExp('^https?:\\/\\/.+\\.(jpg|jpeg|gif|png|webp|bmp)$','i')
    return pattern.test(url)
}