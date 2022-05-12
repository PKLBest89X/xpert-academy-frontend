import type { CourseDetailsType } from "types/course.type";
import type { ArticleDetailsType } from "types/article.type";

export const fakeData: CourseDetailsType[] = [
    {
        courseId: "cs001",
        courseTitle: "Typecript ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teachBy: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 120000,
        userRegis: 1000,
        coursePicture: "./assets/images/user/course/typescript_logo.png",
    },
    {
        courseId: "cs002",
        courseTitle: "angular ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teachBy: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 130000,
        userRegis: 50,
        coursePicture: "./assets/images/user/course/angular_logo.jpg",
    },
    {
        courseId: "cs003",
        courseTitle: "reactjs ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teachBy: "ອາຈານສະຫຼອງໄຊ",
        coursePrice: 140000,
        userRegis: 70,
        coursePicture: "./assets/images/user/course/react.png",
    },
    {
        courseId: "cs004",
        courseTitle: "python ສຳລັບຜູ້ເລີ່ມຕົ້ນ",
        teachBy: "ອາຈານສະຫຼອງໄຊ",
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
