function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}
checkSecurity(true, false, true, true); 
checkSecurity(true, true, false, true);
checkSecurity(true, true, true, false);
checkSecurity(true, true, true, true); 
