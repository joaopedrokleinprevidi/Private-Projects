const size = {
    MinMobile: "300px",
    MaxMobile: "559px",
    MinTablet: "600px",
    MaxTablet: "1024px",
    MinDesktop: "1025px",
    MaxDesktop: "1251px",
    MinLargeScreens: "1252px",
    MaxLargeScreens: "1500px",
}

export const device = {
    MinMobile: `(min-width: ${size.MinMobile})`,
    MaxMobile: `(max-width: ${size.MaxMobile})`,
    MinTablet: `(min-width: ${size.MinTablet})`,
    MaxTablet: `(max-width: ${size.MaxTablet})`,
    MinDesktop: `(min-width: ${size.MinDesktop})`,
    MaxDesktop: `(max-width: ${size.MaxDesktop})`,
    MinLargeScreens: `(min-width: ${size.MinLargeScreens})`,
    MaxLargeScreens: `(max-width: ${size.MaxLargeScreens})`,
}


const specificSizes = {
    MinAsusZenbookFold: "852px",
    MaxAsusZenbookFold: "854px",

    MinIpadAir: "819px",
    MaxIpadAir: "821px",

    MinIpadMini: "767px",
    MaxIpadMini: "769px",

}

export const specificDevices = {
    MinAsusZenbookFold: `(min-width: ${specificSizes.MinAsusZenbookFold})`,
    MaxAsusZenbookFold: `(max-width: ${specificSizes.MaxAsusZenbookFold})`,
    
    MinIpadAir: `(min-width: ${specificSizes.MinIpadAir})`,
    MaxIpadAir: `(max-width: ${specificSizes.MaxIpadAir})`,
    
    MinIpadMini: `(min-width: ${specificSizes.MinIpadMini})`,
    MaxIpadMini: `(max-width: ${specificSizes.MaxIpadMini})`,

}
 