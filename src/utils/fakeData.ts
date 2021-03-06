import type { CourseDetailsDisplayType } from "types/course.type";
import type { ArticleDetailsType } from "types/article.type";

export const fakeData: CourseDetailsDisplayType[] = [
    {
        courseId: "cs001",
        courseName: "Typecript ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teacher: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 120000,
        userRegis: 1000,
        coursePicture: "./assets/images/user/course/typescript_logo.png",
    },
    {
        courseId: "cs002",
        courseName: "angular ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teacher: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 130000,
        userRegis: 50,
        coursePicture: "./assets/images/user/course/angular_logo.jpg",
    },
    {
        courseId: "cs003",
        courseName: "reactjs ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teacher: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 140000,
        userRegis: 70,
        coursePicture: "./assets/images/user/course/react.png",
    },
    {
        courseId: "cs004",
        courseName: "python ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teacher: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 150000,
        userRegis: 37,
        coursePicture: "./assets/images/user/course/python_logo.jpg",
    },
];

export const fakeArticleData: ArticleDetailsType[] = [
    {
        articleId: "at001",
        articleTitle: "ວິຊາເຄມີສາດສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        articleDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        ariticleTimePosted: new Date(),
        articleViews: 100,
        articlePicture: "./assets/images/user/articles/chemistry_article.jpg",
    },
    {
        articleId: "at002",
        articleTitle: "ພາສາອັງກິດສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        articleDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        ariticleTimePosted: new Date(),
        articleViews: 50,
        articlePicture: "./assets/images/user/articles/english_article.jpg",
    },
    {
        articleId: "at003",
        articleTitle: "ວິຊາຄະນິດສາດສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        articleDescription: "ອາຈານສະຫຼອງໄຊ",
        ariticleTimePosted: new Date(),
        articleViews: 70,
        articlePicture: "./assets/images/user/articles/math_article.jpg",
    },
    {
        articleId: "at004",
        articleTitle: "ການຂຽນໂປຣແກຣມສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        articleDescription: "ອາຈານສະຫຼອງໄຊ",
        ariticleTimePosted: new Date(),
        articleViews: 37,
        articlePicture: "./assets/images/user/articles/programming_article.png",
    },
];

export const fakeBannerData = [
    {
        bannerId: 1,
        bannerImage: "./assets/images/user/banner/background_image_banner_xpert.jpg"
    },
    {
        bannerId: 2,
        bannerImage: "./assets/images/user/banner/chinese_course.jpg"
    },
    {
        bannerId: 3,
        bannerImage: "./assets/images/user/banner/final_term2_mor6.jpg"
    },
    {
        bannerId: 4,
        bannerImage: "./assets/images/user/banner/lao_language.jpg"
    },
    {
        bannerId: 5,
        bannerImage: "./assets/images/user/banner/math_for_mor6.jpg"
    }
]
