// find the gravitational force between two spherical objects
const solution = (arr_val, arr_unit) => {
    const G = 6.67e-11
    const convertKg = {
        kg : 1,
        g : 1e-3,
        mg : 1e-6,
        μg : 1e-9,
        lb : 0.453592
    }
    const convertM = {
        m : 1,
        cm : 1e-2,
        mm : 1e-3,
        μm : 1e-6,
        ft : 0.3048
    }
    const m = (arr_val[0] * convertKg[arr_unit[0]]) * (arr_val[1] * convertKg[arr_unit[1]])
    const r = (arr_val[2] * convertM[arr_unit[2]])
    return (G * (m / (r**2)) )
}