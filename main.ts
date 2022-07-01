aicococam.initI2c()
aicococam.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    aicococam.request()
    if (aicococam.isAppear_s(COCOCAMResultType_t.COCOCAMResultBlock)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
