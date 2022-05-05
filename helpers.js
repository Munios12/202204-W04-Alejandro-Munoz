export const strictEquals = (a, b) => {
    let result;

    if (Number.isNaN(a) && Number.isNaN(b)) {
        console.log("desde primer ");
        result = false;
    } else if (isNaN(a) || isNaN(b)) {
        result = Object.is(a, b);
        console.log("desde segundo bloque");
    } else if (!isNaN(a) && !isNaN(b)) {
        result = Object.is(a, b);
        if (!a || !b) {
            result = true;
            console.log("desde tercer bloque");
        }
    } else if (!a || !b) {
        result = Object.is(a, b);
        console.log("desde cuarto bloque");
    }

    return result;
};
