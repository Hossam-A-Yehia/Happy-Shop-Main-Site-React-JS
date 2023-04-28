const category = [
  {
    id: 1,
    title: "ملابس",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879847/cat/%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1_%D8%A7%D9%84%D8%B1%D8%AC%D8%A7%D9%84_d9igwi.png",
  },
  {
    id: 2,
    title: "السوبر ماركت",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879856/cat/%D8%B3%D9%88%D8%A8%D8%B1_%D9%85%D8%A7%D8%B1%D9%83%D8%AA_be0l35.png",
  },
  {
    id: 3,
    title: "الاحذية",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879849/cat/%D8%A7%D9%84%D8%A7%D8%AD%D8%B0%D9%8A%D8%A9_dygsvy.png",
  },
  {
    id: 4,
    title: "الكتب",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879853/cat/%D8%A7%D9%84%D9%83%D8%AA%D8%A8_ikspg0.png",
  },
  {
    id: 5,
    title: "العاب الفيديو",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879855/cat/%D8%A7%D9%84%D8%B9%D8%A7%D8%A8_%D8%A7%D9%84%D9%81%D9%8A%D8%AF%D9%8A%D9%88_ws9teo.png",
  },
  {
    id: 6,
    title: "موبايلات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879853/cat/%D8%A7%D9%84%D9%85%D9%88%D8%A8%D9%8A%D9%84%D8%A7%D8%AA_lgbw6q.png",
  },
  {
    id: 7,
    title: "الجمال",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879854/cat/%D9%84%D9%88%D8%A7%D8%B2%D9%85_%D8%A7%D9%84%D8%AC%D9%85%D8%A7%D9%84_i2qrtt.png",
  },
  {
    id: 8,
    title: "لوازم المطبخ",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879855/cat/%D9%84%D9%88%D8%A7%D8%B2%D9%85_%D8%A7%D9%84%D9%85%D8%B7%D8%A8%D8%AE_xrsl30.png",
  },
  {
    id: 9,
    title: "اكسسوارات السيارات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879854/cat/%D8%A7%D9%83%D8%B3%D8%B3%D9%88%D8%A7%D8%B1%D8%A7%D8%AA_%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA_fdodev.png",
  },
  {
    id: 10,
    title: "الكاميرات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879853/cat/%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7_g0pto2.png",
  },
  {
    id: 11,
    title: "العناية بالشعر",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879852/cat/%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9_%D8%A8%D8%A7%D9%84%D8%B4%D8%B9%D8%B1_uqckkd.png",
  },
  {
    id: 12,
    title: "التلفزيونات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879854/cat/%D8%AA%D9%84%D9%8A%D9%81%D8%B2%D9%8A%D9%88%D9%86%D8%A7%D8%AA_q1ukbv.png",
  },
  {
    id: 13,
    title: "العناية الشخصية",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879852/cat/%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9_%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9_ilefnu.png",
  },
  {
    id: 14,
    title: "الساعات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879852/cat/%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A7%D8%AA_sevvxn.png",
  },
  {
    id: 15,
    title: "لوازم الرضاعة",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879851/cat/%D8%A7%D9%84%D8%B1%D8%B6%D8%A7%D8%B9%D8%A9_ap2ibc.png",
  },
  {
    id: 16,
    title: "لوازم البيت",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879851/cat/%D8%A7%D9%84%D8%A8%D9%8A%D8%AA_ckqg1f.png",
  },
  {
    id: 17,
    title: "الاجهزة المنزلية",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879850/cat/%D8%A7%D9%84%D8%A7%D8%AC%D9%87%D8%B2%D8%A9_%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9_xvrgvi.png",
  },
  {
    id: 18,
    title: "العناية بالبشرة",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879850/cat/%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D8%A9_vuu1t2.png",
  },
  {
    id: 19,
    title: "البرفيوم",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879850/cat/%D8%A7%D9%84%D8%A8%D8%B1%D9%81%D9%8A%D9%88%D9%85_ctpqgw.png",
  },
  {
    id: 20,
    title: "الرياضة",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879850/cat/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9_hzejgg.png",
  },
  {
    id: 21,
    title: "لوازم البيبي",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879855/cat/%D9%84%D9%88%D8%A7%D8%B2%D9%85_%D8%A7%D9%84%D8%A8%D9%8A%D8%A8%D9%8A_oqm1of.png",
  },
  {
    id: 22,
    title: "الالكترونيات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879849/cat/%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A7%D8%AA_tuzw9b.png",
  },
  {
    id: 23,
    title: "الاثاث",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879848/cat/%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB_rjogqf.png",
  },
  {
    id: 24,
    title: "الالعاب",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879848/cat/%D8%A7%D9%84%D8%A7%D9%84%D8%B9%D8%A7%D8%A8_qwk5sk.png",
  },
  {
    id: 25,
    title: "اجهزة اللابتوب",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879847/cat/%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%88%D8%A8_oy2dni.png",
  },
  {
    id: 26,
    title: "ازياء النساء",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879847/cat/%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1_%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%A1_cr5adg.png",
  },
  {
    id: 27,
    title: "اجهزة الصوت",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879847/cat/%D8%A7%D8%AC%D9%87%D8%B2%D8%A9_%D8%A7%D9%84%D8%B5%D9%88%D8%AA_rpmcsk.png",
  },
  {
    id: 28,
    title: "النظارات",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879854/cat/%D8%A7%D9%84%D9%86%D8%B8%D8%A7%D8%B1%D8%A7%D8%AA_aqhset.png",
  },
  {
    id: 29,
    title: "ادوات تصليح البيت",
    img: "https://res.cloudinary.com/dimy2zhcs/image/upload/v1680879847/cat/%D8%A7%D8%AF%D9%88%D8%A7%D8%AA_%D8%AA%D8%B5%D9%84%D9%8A%D8%AD_dfgfto.png",
  },
];

export default category;
