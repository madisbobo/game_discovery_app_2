
const imgCropper = (url: string) => {
    if (!url) return "";
    let modUrl = url.split("/media/")
    modUrl.splice(1, 0, "media/crop/600/400")
    return modUrl.join("/")
}

export default imgCropper;