// Names, roles and registration numbers transcribed from the owner's supplied
// introduction images. No specialty or attendance schedule has been inferred.
export const doctors = [
  {
    id: "emad-azadeh",
    name: "دکتر عماد آزاده",
    role: "مدیر و مؤسس دکتر رسون",
    label: "مدیر و مؤسس",
    registration: null,
    profile: "/about",
  },
  {
    id: "ali-mahdi-gholian",
    name: "دکتر علی مهدی قلیان",
    role: "پزشک مجموعه",
    label: "پزشک مجموعه",
    registration: "۲۴۰۳۹۱",
    profile: null,
  },
  {
    id: "sadegh-barzegar",
    name: "دکتر صادق برزگر",
    role: "پزشک مجموعه",
    label: "پزشک مجموعه",
    registration: "۲۴۴۳۵۵",
    profile: null,
  },
] as const;

// The owner requested a collective introduction without staff names or photos.
// The degree concentration is normalized from the published SSRC MSc admissions
// announcement; this is not the separate professional title of clinical nutritionist.
export const supportingTeam = [
  {
    id: "nursing",
    icon: "stethoscope",
    title: "تیم پرستاری",
    count: "چندین پرستار",
    description: "برای همراهی در مراقبت‌های پرستاری و خدمات در منزل، متناسب با نیاز شما و هماهنگی تیم درمان.",
  },
  {
    id: "exercise-nutrition",
    icon: "leaf",
    title: "فیزیولوژی و تغذیهٔ ورزشی",
    count: "دو کارشناس ارشد",
    description: "کارشناسی ارشد فیزیولوژی ورزشی، گرایش فیزیولوژی و تغذیهٔ ورزشی؛ همراه شما در برنامه‌ریزی ورزشی متناسب با هدف و شرایطتان.",
  },
] as const;
