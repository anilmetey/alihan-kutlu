/**
 * ALİHAN KUTLU — PHOTO MEDIA WORKS
 * Lal Fotoğrafçılık Bilişim Prodüksiyon Turizm Reklam ve Tanıtım Hizmetleri Ltd. Şti.
 *
 * Gerçek site (www.alihankutlu.com) verileriyle (152 fotoğraf + 23 video)
 * Telefon galerisi sadeliğinde ve hızında arayüz + Tam Kapsamlı Yönetim Paneli (CMS).
 */

const STORAGE_KEYS = {
  ALBUMS: 'alihan_kutlu_v3_albums',
  VIDEOS: 'alihan_kutlu_v3_videos'
};

const INITIAL_ALBUMS = [
  {
    "id": "alb-corporate",
    "title": "Kurumsal Portreler & İş Dünyası",
    "category": "Kurumsal & Portre",
    "description": "Yöneticiler, iş dünyası profesyonelleri, sanatçılar ve kurumsal iletişim için stüdyo ve lokasyon portre çekimleri.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_ebe62de444f749aaa527a1d4a6f50f1f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ebe62de444f749aaa527a1d4a6f50f1f~mv2.jpg",
    "photos": [
      {
        "id": "alb-corporate-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ebe62de444f749aaa527a1d4a6f50f1f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ebe62de444f749aaa527a1d4a6f50f1f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ebe62de444f749aaa527a1d4a6f50f1f~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #1"
      },
      {
        "id": "alb-corporate-p2",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_5e027adcc9704453be34168ac8ccd060~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_5e027adcc9704453be34168ac8ccd060~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_5e027adcc9704453be34168ac8ccd060~mv2.jpg",
        "width": 665,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #2"
      },
      {
        "id": "alb-corporate-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a7435decf8be426fa7236379113726c9~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a7435decf8be426fa7236379113726c9~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a7435decf8be426fa7236379113726c9~mv2.jpg",
        "width": 1000,
        "height": 749,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #3"
      },
      {
        "id": "alb-corporate-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_dee0d4e7b19148f0bbcd8d9096d01511~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_dee0d4e7b19148f0bbcd8d9096d01511~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_dee0d4e7b19148f0bbcd8d9096d01511~mv2.jpg",
        "width": 666,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #4"
      },
      {
        "id": "alb-corporate-p5",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_fc6c78ed26454a49aced8c7639c27fd7~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_fc6c78ed26454a49aced8c7639c27fd7~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_fc6c78ed26454a49aced8c7639c27fd7~mv2.jpg",
        "width": 1000,
        "height": 709,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #5"
      },
      {
        "id": "alb-corporate-p6",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_4e897c95d34045b8872849b4495a74ca~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_4e897c95d34045b8872849b4495a74ca~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_4e897c95d34045b8872849b4495a74ca~mv2.jpg",
        "width": 1000,
        "height": 665,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #6"
      },
      {
        "id": "alb-corporate-p7",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_2b523d6b38904a60b8ec8267c2363760~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_2b523d6b38904a60b8ec8267c2363760~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_2b523d6b38904a60b8ec8267c2363760~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #7"
      },
      {
        "id": "alb-corporate-p8",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_d2d03c1b266e4f95a51e07fbbcde1b70~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_d2d03c1b266e4f95a51e07fbbcde1b70~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_d2d03c1b266e4f95a51e07fbbcde1b70~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #8"
      },
      {
        "id": "alb-corporate-p9",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ca42264076e145278f293f28aad16c16~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ca42264076e145278f293f28aad16c16~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ca42264076e145278f293f28aad16c16~mv2.jpg",
        "width": 1000,
        "height": 665,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #9"
      },
      {
        "id": "alb-corporate-p10",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_79b902d50dff44fba76cd66d4c792504~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_79b902d50dff44fba76cd66d4c792504~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_79b902d50dff44fba76cd66d4c792504~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #10"
      },
      {
        "id": "alb-corporate-p11",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_198084157d0f42b6a80bb0b5288b8a88~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_198084157d0f42b6a80bb0b5288b8a88~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_198084157d0f42b6a80bb0b5288b8a88~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #11"
      },
      {
        "id": "alb-corporate-p12",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_1117aa4b2fd8457e98cfd1376a19800f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_1117aa4b2fd8457e98cfd1376a19800f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_1117aa4b2fd8457e98cfd1376a19800f~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #12"
      },
      {
        "id": "alb-corporate-p13",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_988c19a8cef246fcaf02dacf49d445f2~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_988c19a8cef246fcaf02dacf49d445f2~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_988c19a8cef246fcaf02dacf49d445f2~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #13"
      },
      {
        "id": "alb-corporate-p14",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_383006b2b5d24c3896fe1c7f76d9a3c9~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_383006b2b5d24c3896fe1c7f76d9a3c9~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_383006b2b5d24c3896fe1c7f76d9a3c9~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #14"
      },
      {
        "id": "alb-corporate-p15",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_f5be1ccbe666465582c58fed2ff9e515~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_f5be1ccbe666465582c58fed2ff9e515~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_f5be1ccbe666465582c58fed2ff9e515~mv2.jpg",
        "width": 694,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #15"
      },
      {
        "id": "alb-corporate-p16",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_797cba57724f44f6b57c90ee07085d8f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_797cba57724f44f6b57c90ee07085d8f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_797cba57724f44f6b57c90ee07085d8f~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #16"
      },
      {
        "id": "alb-corporate-p17",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_4c5353c48b734d92b9c33435e9f3639b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_4c5353c48b734d92b9c33435e9f3639b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_4c5353c48b734d92b9c33435e9f3639b~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #17"
      },
      {
        "id": "alb-corporate-p18",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_2cfa3374deaf489d929358e22f46629e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_2cfa3374deaf489d929358e22f46629e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_2cfa3374deaf489d929358e22f46629e~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #18"
      },
      {
        "id": "alb-corporate-p19",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_9cf2dbd4bd194c0da2fc9ac5cf1a26e3~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_9cf2dbd4bd194c0da2fc9ac5cf1a26e3~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_9cf2dbd4bd194c0da2fc9ac5cf1a26e3~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #19"
      },
      {
        "id": "alb-corporate-p20",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a17b9b457ac54326936dfec7d4f4697b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a17b9b457ac54326936dfec7d4f4697b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a17b9b457ac54326936dfec7d4f4697b~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #20"
      },
      {
        "id": "alb-corporate-p21",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_18cd125ee37f4ac28e281386d9e1cede~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_18cd125ee37f4ac28e281386d9e1cede~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_18cd125ee37f4ac28e281386d9e1cede~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #21"
      },
      {
        "id": "alb-corporate-p22",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a12609d0fe2041caba1fa5c9ad676556~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a12609d0fe2041caba1fa5c9ad676556~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a12609d0fe2041caba1fa5c9ad676556~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #22"
      },
      {
        "id": "alb-corporate-p23",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_14c33b7a4ad84aae9d052943bfa6bd39~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_14c33b7a4ad84aae9d052943bfa6bd39~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_14c33b7a4ad84aae9d052943bfa6bd39~mv2.jpg",
        "width": 1000,
        "height": 667,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #23"
      },
      {
        "id": "alb-corporate-p24",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_85cceb17bffd4ab2b17321d50a490e3b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_85cceb17bffd4ab2b17321d50a490e3b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_85cceb17bffd4ab2b17321d50a490e3b~mv2.jpg",
        "width": 1000,
        "height": 651,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #24"
      },
      {
        "id": "alb-corporate-p25",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a83fa9e6d54c4d8da8257528f512113e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a83fa9e6d54c4d8da8257528f512113e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a83fa9e6d54c4d8da8257528f512113e~mv2.jpg",
        "width": 1000,
        "height": 665,
        "caption": "Kurumsal Portreler & İş Dünyası — Kare #25"
      }
    ]
  },
  {
    "id": "alb-product",
    "title": "Ürün, Tanıtım, Gastronomi & Sanayi",
    "category": "Ürün & Endüstriyel",
    "description": "Endüstriyel üretim tesisleri, kurumsal mekanlar, reklam/katalog ürün çekimleri ve gastronomi prodüksiyonları.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_ab54679f50d34627ab83c559bd3a090b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ab54679f50d34627ab83c559bd3a090b~mv2.jpg",
    "photos": [
      {
        "id": "alb-product-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ab54679f50d34627ab83c559bd3a090b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ab54679f50d34627ab83c559bd3a090b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ab54679f50d34627ab83c559bd3a090b~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #1"
      },
      {
        "id": "alb-product-p2",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a647a25b00cd44e3b123a6acf0c69bd9~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a647a25b00cd44e3b123a6acf0c69bd9~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a647a25b00cd44e3b123a6acf0c69bd9~mv2.jpg",
        "width": 1449,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #2"
      },
      {
        "id": "alb-product-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_616f907fe337477eafb31d645564038e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_616f907fe337477eafb31d645564038e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_616f907fe337477eafb31d645564038e~mv2.jpg",
        "width": 1301,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #3"
      },
      {
        "id": "alb-product-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a73f64ed12ce48adad0fcf83e14b6af2~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a73f64ed12ce48adad0fcf83e14b6af2~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a73f64ed12ce48adad0fcf83e14b6af2~mv2.jpg",
        "width": 1500,
        "height": 984,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #4"
      },
      {
        "id": "alb-product-p5",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_d1e220c0f5f84aef94f3f7b118d53614~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_d1e220c0f5f84aef94f3f7b118d53614~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_d1e220c0f5f84aef94f3f7b118d53614~mv2.jpg",
        "width": 1494,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #5"
      },
      {
        "id": "alb-product-p6",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_48f4cf02efd54a29bb5230eef8c7a50b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_48f4cf02efd54a29bb5230eef8c7a50b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_48f4cf02efd54a29bb5230eef8c7a50b~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #6"
      },
      {
        "id": "alb-product-p7",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_92c20658adca4d80905985f37e5dc20c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_92c20658adca4d80905985f37e5dc20c~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_92c20658adca4d80905985f37e5dc20c~mv2.jpg",
        "width": 1000,
        "height": 1301,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #7"
      },
      {
        "id": "alb-product-p8",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_35e2adbbc2b44c649b13eb43dd016595~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_35e2adbbc2b44c649b13eb43dd016595~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_35e2adbbc2b44c649b13eb43dd016595~mv2.jpg",
        "width": 1500,
        "height": 999,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #8"
      },
      {
        "id": "alb-product-p9",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_5c1a6c70f9794fbe82636857237f19c0~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_5c1a6c70f9794fbe82636857237f19c0~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_5c1a6c70f9794fbe82636857237f19c0~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #9"
      },
      {
        "id": "alb-product-p10",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_9eafa8a295604aa788ab0551a24dd676~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_9eafa8a295604aa788ab0551a24dd676~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_9eafa8a295604aa788ab0551a24dd676~mv2.jpg",
        "width": 1458,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #10"
      },
      {
        "id": "alb-product-p11",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_733d55722d884f09a752dc81c245d4b8~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_733d55722d884f09a752dc81c245d4b8~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_733d55722d884f09a752dc81c245d4b8~mv2.jpg",
        "width": 1500,
        "height": 985,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #11"
      },
      {
        "id": "alb-product-p12",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a30fa1e47d174679831092660c8b1b18~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a30fa1e47d174679831092660c8b1b18~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a30fa1e47d174679831092660c8b1b18~mv2.jpg",
        "width": 944,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #12"
      },
      {
        "id": "alb-product-p13",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_8676e41a912640e2acf4acdd7ff11afc~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_8676e41a912640e2acf4acdd7ff11afc~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_8676e41a912640e2acf4acdd7ff11afc~mv2.jpg",
        "width": 1000,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #13"
      },
      {
        "id": "alb-product-p14",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_6058c5626ff44d209d9dab0596652a15~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_6058c5626ff44d209d9dab0596652a15~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_6058c5626ff44d209d9dab0596652a15~mv2.jpg",
        "width": 800,
        "height": 1200,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #14"
      },
      {
        "id": "alb-product-p15",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_4f23b77454cf4726bcd132e0a90541a7~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_4f23b77454cf4726bcd132e0a90541a7~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_4f23b77454cf4726bcd132e0a90541a7~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #15"
      },
      {
        "id": "alb-product-p16",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_50ed9e814b4d4156b08800e6682c9162~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_50ed9e814b4d4156b08800e6682c9162~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_50ed9e814b4d4156b08800e6682c9162~mv2.jpg",
        "width": 849,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #16"
      },
      {
        "id": "alb-product-p17",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ce9f3f0b5c5448d091bb9d8315be0c77~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ce9f3f0b5c5448d091bb9d8315be0c77~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ce9f3f0b5c5448d091bb9d8315be0c77~mv2.jpg",
        "width": 1269,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #17"
      },
      {
        "id": "alb-product-p18",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_d267843f0dc940039d1bab146cf44b6e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_d267843f0dc940039d1bab146cf44b6e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_d267843f0dc940039d1bab146cf44b6e~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #18"
      },
      {
        "id": "alb-product-p19",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c8c992d9b5794e399ee600e6fcc6549e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c8c992d9b5794e399ee600e6fcc6549e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c8c992d9b5794e399ee600e6fcc6549e~mv2.jpg",
        "width": 1500,
        "height": 955,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #19"
      },
      {
        "id": "alb-product-p20",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_1baa3b69925647ec834ac1371ee1919a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_1baa3b69925647ec834ac1371ee1919a~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_1baa3b69925647ec834ac1371ee1919a~mv2.jpg",
        "width": 800,
        "height": 1200,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #20"
      },
      {
        "id": "alb-product-p21",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a3a04ae625714dcd91b427edd429a916~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a3a04ae625714dcd91b427edd429a916~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a3a04ae625714dcd91b427edd429a916~mv2.jpg",
        "width": 723,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #21"
      },
      {
        "id": "alb-product-p22",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7cdfbe219ad34cb28c0b47174858c388~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7cdfbe219ad34cb28c0b47174858c388~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7cdfbe219ad34cb28c0b47174858c388~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #22"
      },
      {
        "id": "alb-product-p23",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_68494be745fb4b5280171a9d974294bc~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_68494be745fb4b5280171a9d974294bc~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_68494be745fb4b5280171a9d974294bc~mv2.jpg",
        "width": 787,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #23"
      },
      {
        "id": "alb-product-p24",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_6abfd649613b4ec0a0900f51d4f3cbcb~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_6abfd649613b4ec0a0900f51d4f3cbcb~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_6abfd649613b4ec0a0900f51d4f3cbcb~mv2.jpg",
        "width": 1500,
        "height": 856,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #24"
      },
      {
        "id": "alb-product-p25",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_3da5f72e43314fe58f4d1bdb22d5048c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_3da5f72e43314fe58f4d1bdb22d5048c~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_3da5f72e43314fe58f4d1bdb22d5048c~mv2.jpg",
        "width": 1317,
        "height": 1000,
        "caption": "Ürün, Tanıtım, Gastronomi & Sanayi — Kare #25"
      }
    ]
  },
  {
    "id": "alb-mediamix",
    "title": "Photo Media Works — Moda & Kreatif",
    "category": "Moda & Kreatif",
    "description": "Alihan Kutlu Photo Media Works seçkisi; moda, editoryal konsept, sahne ve kreatif ışık çalışmaları.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_09fb625772994f1cb53c2e918fb55e67~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_09fb625772994f1cb53c2e918fb55e67~mv2.jpg",
    "photos": [
      {
        "id": "alb-mediamix-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_09fb625772994f1cb53c2e918fb55e67~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_09fb625772994f1cb53c2e918fb55e67~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_09fb625772994f1cb53c2e918fb55e67~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #1"
      },
      {
        "id": "alb-mediamix-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_6058c5626ff44d209d9dab0596652a15~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_6058c5626ff44d209d9dab0596652a15~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_6058c5626ff44d209d9dab0596652a15~mv2.jpg",
        "width": 800,
        "height": 1200,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #3"
      },
      {
        "id": "alb-mediamix-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_1baa3b69925647ec834ac1371ee1919a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_1baa3b69925647ec834ac1371ee1919a~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_1baa3b69925647ec834ac1371ee1919a~mv2.jpg",
        "width": 800,
        "height": 1200,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #4"
      },
      {
        "id": "alb-mediamix-p6",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_3abe26cff3d24e4cbdcc8d9fca43f688~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_3abe26cff3d24e4cbdcc8d9fca43f688~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_3abe26cff3d24e4cbdcc8d9fca43f688~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #6"
      },
      {
        "id": "alb-mediamix-p8",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c42d020884d84b2ca98cb8e55532ce2e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c42d020884d84b2ca98cb8e55532ce2e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c42d020884d84b2ca98cb8e55532ce2e~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #8"
      },
      {
        "id": "alb-mediamix-p9",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c4a05f631b394166b059c45f0ea10a94~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c4a05f631b394166b059c45f0ea10a94~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c4a05f631b394166b059c45f0ea10a94~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #9"
      },
      {
        "id": "alb-mediamix-p10",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_77be44c025a841e0bb0d976f820345da~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_77be44c025a841e0bb0d976f820345da~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_77be44c025a841e0bb0d976f820345da~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #10"
      },
      {
        "id": "alb-mediamix-p11",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_299352dfbf5f4b0a9b54d0621cbfedbf~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_299352dfbf5f4b0a9b54d0621cbfedbf~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_299352dfbf5f4b0a9b54d0621cbfedbf~mv2.jpg",
        "width": 1250,
        "height": 703,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #11"
      },
      {
        "id": "alb-mediamix-p12",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_78dafb74bb4845ef8d313a83bd7db23a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_78dafb74bb4845ef8d313a83bd7db23a~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_78dafb74bb4845ef8d313a83bd7db23a~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #12"
      },
      {
        "id": "alb-mediamix-p13",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_836b10b9d33d4c75902405e9091f2800~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_836b10b9d33d4c75902405e9091f2800~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_836b10b9d33d4c75902405e9091f2800~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #13"
      },
      {
        "id": "alb-mediamix-p14",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c94955bb063643ee8646347f6d375301~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c94955bb063643ee8646347f6d375301~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c94955bb063643ee8646347f6d375301~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #14"
      },
      {
        "id": "alb-mediamix-p15",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_8593aa2a292547459bee64b89435970d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_8593aa2a292547459bee64b89435970d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_8593aa2a292547459bee64b89435970d~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #15"
      },
      {
        "id": "alb-mediamix-p16",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_b1ef9deb15e64a8391c4484cbf93a913~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_b1ef9deb15e64a8391c4484cbf93a913~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_b1ef9deb15e64a8391c4484cbf93a913~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #16"
      },
      {
        "id": "alb-mediamix-p17",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_aedde4f55d244be0a9d7e693d19bc66a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_aedde4f55d244be0a9d7e693d19bc66a~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_aedde4f55d244be0a9d7e693d19bc66a~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #17"
      },
      {
        "id": "alb-mediamix-p18",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_91343d018ebd4103b9f141c7c1a6628d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_91343d018ebd4103b9f141c7c1a6628d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_91343d018ebd4103b9f141c7c1a6628d~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #18"
      },
      {
        "id": "alb-mediamix-p19",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_2b6cf44a5e4c415cba0a9d419749a487~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_2b6cf44a5e4c415cba0a9d419749a487~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_2b6cf44a5e4c415cba0a9d419749a487~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #19"
      },
      {
        "id": "alb-mediamix-p20",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_0024ad7bfdeb483bbea10f28396e76d6~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_0024ad7bfdeb483bbea10f28396e76d6~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_0024ad7bfdeb483bbea10f28396e76d6~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #20"
      },
      {
        "id": "alb-mediamix-p21",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_11bded6b06b043c6ab89dfc2cd9c9033~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_11bded6b06b043c6ab89dfc2cd9c9033~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_11bded6b06b043c6ab89dfc2cd9c9033~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #21"
      },
      {
        "id": "alb-mediamix-p22",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_46bd12c6d42d42ab9e749cc5e576d573~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_46bd12c6d42d42ab9e749cc5e576d573~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_46bd12c6d42d42ab9e749cc5e576d573~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #22"
      },
      {
        "id": "alb-mediamix-p23",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_f03c234f674146d087740caa2cd58b34~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_f03c234f674146d087740caa2cd58b34~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_f03c234f674146d087740caa2cd58b34~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #23"
      },
      {
        "id": "alb-mediamix-p24",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_6028b0f0f25f420a8c4331679dbc82c3~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_6028b0f0f25f420a8c4331679dbc82c3~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_6028b0f0f25f420a8c4331679dbc82c3~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #24"
      },
      {
        "id": "alb-mediamix-p25",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_0a17f2f370bf417bb6ef8bff21c1573d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_0a17f2f370bf417bb6ef8bff21c1573d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_0a17f2f370bf417bb6ef8bff21c1573d~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Photo Media Works — Moda & Kreatif — Kare #25"
      }
    ]
  },
  {
    "id": "alb-events",
    "title": "Etkinlik, Konser & Sahne Çekimleri",
    "category": "Etkinlik & Konser",
    "description": "Kurumsal zirveler, lansmanlar, sahne performansları, konserler ve özel organizasyon belgeselleri.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_aa60981d03be476f8541019c601d336f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_aa60981d03be476f8541019c601d336f~mv2.jpg",
    "photos": [
      {
        "id": "alb-events-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_aa60981d03be476f8541019c601d336f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_aa60981d03be476f8541019c601d336f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_aa60981d03be476f8541019c601d336f~mv2.jpg",
        "width": 1349,
        "height": 902,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #1"
      },
      {
        "id": "alb-events-p2",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7391b6bacc554da28c937efc24ff340d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7391b6bacc554da28c937efc24ff340d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7391b6bacc554da28c937efc24ff340d~mv2.jpg",
        "width": 1616,
        "height": 1080,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #2"
      },
      {
        "id": "alb-events-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a7a11663f8e04de99b31f86b2298035c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a7a11663f8e04de99b31f86b2298035c~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a7a11663f8e04de99b31f86b2298035c~mv2.jpg",
        "width": 1616,
        "height": 1080,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #3"
      },
      {
        "id": "alb-events-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a3b18afb747045c5a21e8e875935b958~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a3b18afb747045c5a21e8e875935b958~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a3b18afb747045c5a21e8e875935b958~mv2.jpg",
        "width": 1500,
        "height": 970,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #4"
      },
      {
        "id": "alb-events-p5",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_b28641a5be754bfca4252159f9f905b6~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_b28641a5be754bfca4252159f9f905b6~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_b28641a5be754bfca4252159f9f905b6~mv2.jpg",
        "width": 1000,
        "height": 1500,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #5"
      },
      {
        "id": "alb-events-p6",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_22be432b91e540a1ba47f3b7818a3364~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_22be432b91e540a1ba47f3b7818a3364~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_22be432b91e540a1ba47f3b7818a3364~mv2.jpg",
        "width": 1000,
        "height": 1500,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #6"
      },
      {
        "id": "alb-events-p7",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_91002dfadfc04a14be9ce2b0709a06f4~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_91002dfadfc04a14be9ce2b0709a06f4~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_91002dfadfc04a14be9ce2b0709a06f4~mv2.jpg",
        "width": 1000,
        "height": 1500,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #7"
      },
      {
        "id": "alb-events-p8",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_0b531e58cc9146fbb1a7f3a78bbeddc1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_0b531e58cc9146fbb1a7f3a78bbeddc1~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_0b531e58cc9146fbb1a7f3a78bbeddc1~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #8"
      },
      {
        "id": "alb-events-p9",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_96bf04f96c494d8080aba20083f95733~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_96bf04f96c494d8080aba20083f95733~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_96bf04f96c494d8080aba20083f95733~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #9"
      },
      {
        "id": "alb-events-p10",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_cb08b681dad846ac9aa701b964a9e3aa~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_cb08b681dad846ac9aa701b964a9e3aa~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_cb08b681dad846ac9aa701b964a9e3aa~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #10"
      },
      {
        "id": "alb-events-p11",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_61a1b5a27a2e42e782322a57670d02d9~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_61a1b5a27a2e42e782322a57670d02d9~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_61a1b5a27a2e42e782322a57670d02d9~mv2.jpg",
        "width": 1000,
        "height": 1500,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #11"
      },
      {
        "id": "alb-events-p12",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_aaf3209b66be4322a7838ab34abc22da~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_aaf3209b66be4322a7838ab34abc22da~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_aaf3209b66be4322a7838ab34abc22da~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #12"
      },
      {
        "id": "alb-events-p13",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_28e50aa19ad148c7b8f43e43dd234f23~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_28e50aa19ad148c7b8f43e43dd234f23~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_28e50aa19ad148c7b8f43e43dd234f23~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #13"
      },
      {
        "id": "alb-events-p14",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_520f6f95b7954c8ab7ab584ebe86ef58~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_520f6f95b7954c8ab7ab584ebe86ef58~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_520f6f95b7954c8ab7ab584ebe86ef58~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #14"
      },
      {
        "id": "alb-events-p15",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_d9db8c7a1be3478e9cdf1c809ade3a17~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_d9db8c7a1be3478e9cdf1c809ade3a17~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_d9db8c7a1be3478e9cdf1c809ade3a17~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #15"
      },
      {
        "id": "alb-events-p16",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_3142d539d94143dcac7091d8baed9234~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_3142d539d94143dcac7091d8baed9234~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_3142d539d94143dcac7091d8baed9234~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #16"
      },
      {
        "id": "alb-events-p17",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c4cefcca856245f297dadaf3c4a5ebbb~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c4cefcca856245f297dadaf3c4a5ebbb~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c4cefcca856245f297dadaf3c4a5ebbb~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #17"
      },
      {
        "id": "alb-events-p18",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_4d40d99a41134fdbad8746fda3180433~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_4d40d99a41134fdbad8746fda3180433~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_4d40d99a41134fdbad8746fda3180433~mv2.jpg",
        "width": 1000,
        "height": 1500,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #18"
      },
      {
        "id": "alb-events-p19",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_9a775a0778244c1dafa5b13a642adbef~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_9a775a0778244c1dafa5b13a642adbef~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_9a775a0778244c1dafa5b13a642adbef~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #19"
      },
      {
        "id": "alb-events-p20",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_486a61b81c234e2e827e8d9d1444e5da~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_486a61b81c234e2e827e8d9d1444e5da~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_486a61b81c234e2e827e8d9d1444e5da~mv2.jpg",
        "width": 1500,
        "height": 1147,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #20"
      },
      {
        "id": "alb-events-p21",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a7287cf9fc774c85b7039230cfa6ab8d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a7287cf9fc774c85b7039230cfa6ab8d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a7287cf9fc774c85b7039230cfa6ab8d~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #21"
      },
      {
        "id": "alb-events-p22",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_3691fa91beb045048e72ef8a4d4ff73d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_3691fa91beb045048e72ef8a4d4ff73d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_3691fa91beb045048e72ef8a4d4ff73d~mv2.jpg",
        "width": 1500,
        "height": 1099,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #22"
      },
      {
        "id": "alb-events-p23",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_d05f17a703f649acbcd8621ecfb8b4c1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_d05f17a703f649acbcd8621ecfb8b4c1~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_d05f17a703f649acbcd8621ecfb8b4c1~mv2.jpg",
        "width": 1007,
        "height": 1500,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #23"
      },
      {
        "id": "alb-events-p24",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a70678125b42430fa619207c69fe624e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a70678125b42430fa619207c69fe624e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a70678125b42430fa619207c69fe624e~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #24"
      },
      {
        "id": "alb-events-p25",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_81cae8ac816d42468af2dac55fe58e1f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_81cae8ac816d42468af2dac55fe58e1f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_81cae8ac816d42468af2dac55fe58e1f~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Etkinlik, Konser & Sahne Çekimleri — Kare #25"
      }
    ]
  },
  {
    "id": "alb-portrait",
    "title": "Özel Konsept & Portre Seçkisi",
    "category": "Kurumsal & Portre",
    "description": "Doğal ışık ve özel stüdyo atmosferinde gerçekleştirilen bireysel ve konsept portre çalışmaları.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_a47901c3dc414efc8b040cab65b639df~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a47901c3dc414efc8b040cab65b639df~mv2.jpg",
    "photos": [
      {
        "id": "alb-portrait-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a47901c3dc414efc8b040cab65b639df~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a47901c3dc414efc8b040cab65b639df~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a47901c3dc414efc8b040cab65b639df~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Özel Konsept & Portre Seçkisi — Kare #1"
      },
      {
        "id": "alb-portrait-p2",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_6665fa3e636c43a3b4c28f6c458c98c1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_6665fa3e636c43a3b4c28f6c458c98c1~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_6665fa3e636c43a3b4c28f6c458c98c1~mv2.jpg",
        "width": 1500,
        "height": 1000,
        "caption": "Özel Konsept & Portre Seçkisi — Kare #2"
      },
      {
        "id": "alb-portrait-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_65ae4e86c1c540069e1c171b6ac76b44~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_65ae4e86c1c540069e1c171b6ac76b44~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_65ae4e86c1c540069e1c171b6ac76b44~mv2.jpg",
        "width": 1778,
        "height": 1000,
        "caption": "Özel Konsept & Portre Seçkisi — Kare #3"
      },
      {
        "id": "alb-portrait-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_b3bfcc1f3d8f4915afc692832dde30e9~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_b3bfcc1f3d8f4915afc692832dde30e9~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_b3bfcc1f3d8f4915afc692832dde30e9~mv2.jpg",
        "width": 667,
        "height": 1000,
        "caption": "Özel Konsept & Portre Seçkisi — Kare #4"
      },
      {
        "id": "alb-portrait-p5",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7d43f0b7bf114822be0aa21ff33484c6~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7d43f0b7bf114822be0aa21ff33484c6~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7d43f0b7bf114822be0aa21ff33484c6~mv2.jpg",
        "width": 1535,
        "height": 1000,
        "caption": "Özel Konsept & Portre Seçkisi — Kare #5"
      }
    ]
  },
  {
    "id": "alb-wedding",
    "title": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü)",
    "category": "Düğün",
    "description": "Uluslararası yarışmalarda (WPPI, WPE, Magic Lens) ödül kazanmış dış mekan ve belgesel düğün kareleri.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_f08b7cb47e114867b31be7ab2e350886~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_f08b7cb47e114867b31be7ab2e350886~mv2.jpg",
    "photos": [
      {
        "id": "alb-wedding-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_f08b7cb47e114867b31be7ab2e350886~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_f08b7cb47e114867b31be7ab2e350886~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_f08b7cb47e114867b31be7ab2e350886~mv2.jpg",
        "width": 1250,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #1"
      },
      {
        "id": "alb-wedding-p2",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_28f24bc26e27485bbad9997df655a860~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_28f24bc26e27485bbad9997df655a860~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_28f24bc26e27485bbad9997df655a860~mv2.jpg",
        "width": 787,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #2"
      },
      {
        "id": "alb-wedding-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ebeec28afa5f472297c301404128da86~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ebeec28afa5f472297c301404128da86~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ebeec28afa5f472297c301404128da86~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #3"
      },
      {
        "id": "alb-wedding-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7c4dd7df584e487a808ff2d1092a7922~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7c4dd7df584e487a808ff2d1092a7922~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7c4dd7df584e487a808ff2d1092a7922~mv2.jpg",
        "width": 863,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #4"
      },
      {
        "id": "alb-wedding-p5",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_434ceb35a1a74434a8de0e0e2253f38a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_434ceb35a1a74434a8de0e0e2253f38a~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_434ceb35a1a74434a8de0e0e2253f38a~mv2.jpg",
        "width": 1250,
        "height": 953,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #5"
      },
      {
        "id": "alb-wedding-p6",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7a3325c27d744eb8a9bf62383035c20a~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7a3325c27d744eb8a9bf62383035c20a~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7a3325c27d744eb8a9bf62383035c20a~mv2.jpg",
        "width": 875,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #6"
      },
      {
        "id": "alb-wedding-p7",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_6505945f43894f99a3e72c8d6509b9e4~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_6505945f43894f99a3e72c8d6509b9e4~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_6505945f43894f99a3e72c8d6509b9e4~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #7"
      },
      {
        "id": "alb-wedding-p8",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_075f4805b44442feb7825b0a3c3ea427~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_075f4805b44442feb7825b0a3c3ea427~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_075f4805b44442feb7825b0a3c3ea427~mv2.jpg",
        "width": 1250,
        "height": 834,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #8"
      },
      {
        "id": "alb-wedding-p9",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_e4509385dd0f4e879819eb753197bee9~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_e4509385dd0f4e879819eb753197bee9~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_e4509385dd0f4e879819eb753197bee9~mv2.jpg",
        "width": 1250,
        "height": 988,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #9"
      },
      {
        "id": "alb-wedding-p10",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_3ad9f1a3833a4a24a6e4df4c82a49ce4~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_3ad9f1a3833a4a24a6e4df4c82a49ce4~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_3ad9f1a3833a4a24a6e4df4c82a49ce4~mv2.jpg",
        "width": 1250,
        "height": 775,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #10"
      },
      {
        "id": "alb-wedding-p11",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_f690c6b8e6c24569a589ce802fb94e19~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_f690c6b8e6c24569a589ce802fb94e19~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_f690c6b8e6c24569a589ce802fb94e19~mv2.jpg",
        "width": 1250,
        "height": 1127,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #11"
      },
      {
        "id": "alb-wedding-p12",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_997fb5df2b0c42d58fafc385c8b0f522~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_997fb5df2b0c42d58fafc385c8b0f522~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_997fb5df2b0c42d58fafc385c8b0f522~mv2.jpg",
        "width": 1250,
        "height": 750,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #12"
      },
      {
        "id": "alb-wedding-p13",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_171e8de0d9464f7db1778e4c3a79c008~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_171e8de0d9464f7db1778e4c3a79c008~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_171e8de0d9464f7db1778e4c3a79c008~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #13"
      },
      {
        "id": "alb-wedding-p14",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ab6a4da88d86458896fcba3d87080284~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ab6a4da88d86458896fcba3d87080284~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ab6a4da88d86458896fcba3d87080284~mv2.jpg",
        "width": 1250,
        "height": 746,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #14"
      },
      {
        "id": "alb-wedding-p15",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_cb409f09bce540648cf5b83faa34e377~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_cb409f09bce540648cf5b83faa34e377~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_cb409f09bce540648cf5b83faa34e377~mv2.jpg",
        "width": 1250,
        "height": 885,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #15"
      },
      {
        "id": "alb-wedding-p16",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_451d1d4c5f55405e8e6c030acfe72563~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_451d1d4c5f55405e8e6c030acfe72563~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_451d1d4c5f55405e8e6c030acfe72563~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #16"
      },
      {
        "id": "alb-wedding-p17",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_4af7aa3b7b584231a68fd12460d4519c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_4af7aa3b7b584231a68fd12460d4519c~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_4af7aa3b7b584231a68fd12460d4519c~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #17"
      },
      {
        "id": "alb-wedding-p18",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a398f54b9c3a46a48275213d1954b327~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a398f54b9c3a46a48275213d1954b327~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a398f54b9c3a46a48275213d1954b327~mv2.jpg",
        "width": 1250,
        "height": 875,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #18"
      },
      {
        "id": "alb-wedding-p19",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_76c9d81304b24b83952da233c88ab5c2~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_76c9d81304b24b83952da233c88ab5c2~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_76c9d81304b24b83952da233c88ab5c2~mv2.jpg",
        "width": 833,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #19"
      },
      {
        "id": "alb-wedding-p20",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_193140982a19479f86c2f0494690df76~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_193140982a19479f86c2f0494690df76~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_193140982a19479f86c2f0494690df76~mv2.jpg",
        "width": 1250,
        "height": 1018,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #20"
      },
      {
        "id": "alb-wedding-p21",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_675d16408e7345a99a5de945e0c749e1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_675d16408e7345a99a5de945e0c749e1~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_675d16408e7345a99a5de945e0c749e1~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #21"
      },
      {
        "id": "alb-wedding-p22",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_479966c06fb34b90946b2a6a92be8c25~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_479966c06fb34b90946b2a6a92be8c25~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_479966c06fb34b90946b2a6a92be8c25~mv2.jpg",
        "width": 918,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #22"
      },
      {
        "id": "alb-wedding-p23",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c825150f1af748dea9bd5c9cb845d36d~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c825150f1af748dea9bd5c9cb845d36d~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c825150f1af748dea9bd5c9cb845d36d~mv2.jpg",
        "width": 1159,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #23"
      },
      {
        "id": "alb-wedding-p24",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ea4ef51b8d314590b3c5915661be6593~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ea4ef51b8d314590b3c5915661be6593~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ea4ef51b8d314590b3c5915661be6593~mv2.jpg",
        "width": 1250,
        "height": 1250,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #24"
      },
      {
        "id": "alb-wedding-p25",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_bd06c455d98d40cd809fa39c514068ed~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_bd06c455d98d40cd809fa39c514068ed~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_bd06c455d98d40cd809fa39c514068ed~mv2.jpg",
        "width": 1250,
        "height": 833,
        "caption": "Düğün Fotoğrafları Seçkisi (WPPI & WPE Ödüllü) — Kare #25"
      }
    ]
  },
  {
    "id": "alb-story-ece-oguz",
    "title": "Ece & Oğuz — Düğün Hikayesi",
    "category": "Düğün",
    "description": "Hazırlık aşamasından ilk dansa ve kutlamaya kadar tüm günün sinematik fotoğraf hikayesi.",
    "cover": "https://static.wixstatic.com/media/d0dc7f_28d2354fb8ea4e099aad1697ea27be92~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_28d2354fb8ea4e099aad1697ea27be92~mv2.jpg",
    "photos": [
      {
        "id": "alb-story-ece-oguz-p1",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_28d2354fb8ea4e099aad1697ea27be92~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_28d2354fb8ea4e099aad1697ea27be92~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_28d2354fb8ea4e099aad1697ea27be92~mv2.jpg",
        "width": 1180,
        "height": 1000,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #1"
      },
      {
        "id": "alb-story-ece-oguz-p2",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_857923203e174d60a75fae11dd590540~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_857923203e174d60a75fae11dd590540~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_857923203e174d60a75fae11dd590540~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #2"
      },
      {
        "id": "alb-story-ece-oguz-p3",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a0bbaf3d6c9e4277910610ad37716f00~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a0bbaf3d6c9e4277910610ad37716f00~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a0bbaf3d6c9e4277910610ad37716f00~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #3"
      },
      {
        "id": "alb-story-ece-oguz-p4",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7b58959e98f140ce8989dc7b720f257b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7b58959e98f140ce8989dc7b720f257b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7b58959e98f140ce8989dc7b720f257b~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #4"
      },
      {
        "id": "alb-story-ece-oguz-p5",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_cf076c7fa42942de881354a3f99ad403~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_cf076c7fa42942de881354a3f99ad403~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_cf076c7fa42942de881354a3f99ad403~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #5"
      },
      {
        "id": "alb-story-ece-oguz-p6",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_1cb7bcdd6280478dbe6b562eac321618~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_1cb7bcdd6280478dbe6b562eac321618~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_1cb7bcdd6280478dbe6b562eac321618~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #6"
      },
      {
        "id": "alb-story-ece-oguz-p7",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_4c4ac02e4b9e48f8b8c37ffc18dbd3a1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_4c4ac02e4b9e48f8b8c37ffc18dbd3a1~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_4c4ac02e4b9e48f8b8c37ffc18dbd3a1~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #7"
      },
      {
        "id": "alb-story-ece-oguz-p8",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7d82806471e2468e9673a417db1371b0~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7d82806471e2468e9673a417db1371b0~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7d82806471e2468e9673a417db1371b0~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #8"
      },
      {
        "id": "alb-story-ece-oguz-p9",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_0f93b6bd330c4386829e798b6bd3af3f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_0f93b6bd330c4386829e798b6bd3af3f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_0f93b6bd330c4386829e798b6bd3af3f~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #9"
      },
      {
        "id": "alb-story-ece-oguz-p10",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_015c09b0f3d540f1b36024f7024f6173~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_015c09b0f3d540f1b36024f7024f6173~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_015c09b0f3d540f1b36024f7024f6173~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #10"
      },
      {
        "id": "alb-story-ece-oguz-p11",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_c126d57a07474dc9bab4d66ad89eef97~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_c126d57a07474dc9bab4d66ad89eef97~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_c126d57a07474dc9bab4d66ad89eef97~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #11"
      },
      {
        "id": "alb-story-ece-oguz-p12",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_a853c61b630a47609fe49bc2a7852024~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_a853c61b630a47609fe49bc2a7852024~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_a853c61b630a47609fe49bc2a7852024~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #12"
      },
      {
        "id": "alb-story-ece-oguz-p13",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_09d1525b9d7b43eca3699bab4756f3de~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_09d1525b9d7b43eca3699bab4756f3de~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_09d1525b9d7b43eca3699bab4756f3de~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #13"
      },
      {
        "id": "alb-story-ece-oguz-p14",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ecbd256db36f4d3caec57aa71f25c068~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ecbd256db36f4d3caec57aa71f25c068~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ecbd256db36f4d3caec57aa71f25c068~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #14"
      },
      {
        "id": "alb-story-ece-oguz-p15",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_719c5635456a4d9da51cb15c70921eda~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_719c5635456a4d9da51cb15c70921eda~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_719c5635456a4d9da51cb15c70921eda~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #15"
      },
      {
        "id": "alb-story-ece-oguz-p16",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_09d9338d79df41de9947158ef81d52a3~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_09d9338d79df41de9947158ef81d52a3~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_09d9338d79df41de9947158ef81d52a3~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #16"
      },
      {
        "id": "alb-story-ece-oguz-p17",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_893d539e60654fe2a3cab205d7864c95~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_893d539e60654fe2a3cab205d7864c95~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_893d539e60654fe2a3cab205d7864c95~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #17"
      },
      {
        "id": "alb-story-ece-oguz-p18",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_433766386aa041deaa378e4bfe469aca~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_433766386aa041deaa378e4bfe469aca~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_433766386aa041deaa378e4bfe469aca~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #18"
      },
      {
        "id": "alb-story-ece-oguz-p19",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_e268a846f24a436d97030d2881dcd65e~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_e268a846f24a436d97030d2881dcd65e~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_e268a846f24a436d97030d2881dcd65e~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #19"
      },
      {
        "id": "alb-story-ece-oguz-p20",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_7fe313a8214a483cac3e7e961959a43b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_7fe313a8214a483cac3e7e961959a43b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_7fe313a8214a483cac3e7e961959a43b~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #20"
      },
      {
        "id": "alb-story-ece-oguz-p21",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_ee5f31f7a8b74a8796a442aee290869f~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_ee5f31f7a8b74a8796a442aee290869f~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_ee5f31f7a8b74a8796a442aee290869f~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #21"
      },
      {
        "id": "alb-story-ece-oguz-p22",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_e54a227912784ea8ae0d2bfef5aa898c~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_e54a227912784ea8ae0d2bfef5aa898c~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_e54a227912784ea8ae0d2bfef5aa898c~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #22"
      },
      {
        "id": "alb-story-ece-oguz-p23",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_05b07b4afa1f4eb78c77f7d7e63cff21~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_05b07b4afa1f4eb78c77f7d7e63cff21~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_05b07b4afa1f4eb78c77f7d7e63cff21~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #23"
      },
      {
        "id": "alb-story-ece-oguz-p24",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_718be567367b4e4f8ca9157c88b9f0ac~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_718be567367b4e4f8ca9157c88b9f0ac~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_718be567367b4e4f8ca9157c88b9f0ac~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #24"
      },
      {
        "id": "alb-story-ece-oguz-p25",
        "thumb": "https://static.wixstatic.com/media/d0dc7f_e7c39564217643ba94246bb5fc8c179b~mv2.jpg/v1/fill/w_640,h_640,al_c,q_82/d0dc7f_e7c39564217643ba94246bb5fc8c179b~mv2.jpg",
        "full": "https://static.wixstatic.com/media/d0dc7f_e7c39564217643ba94246bb5fc8c179b~mv2.jpg",
        "width": 1500,
        "height": 602,
        "caption": "Ece & Oğuz — Düğün Hikayesi — Kare #25"
      }
    ]
  }
];

const INITIAL_VIDEOS = [
  {
    "id": "vid-1",
    "title": "Lal Prodüksiyon — Kurumsal & Kreatif Showreel",
    "category": "Tanıtım & Kurumsal",
    "videoId": "C5mqwD0hq6U",
    "videoUrl": "https://www.youtube.com/watch?v=C5mqwD0hq6U",
    "poster": "https://static.wixstatic.com/media/c691b9_230600c2efb848c78716c284de010ca9~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_230600c2efb848c78716c284de010ca9~mv2.jpg"
  },
  {
    "id": "vid-2",
    "title": "Photo Media Works — Moda & Konsept Klip",
    "category": "Moda & Klip",
    "videoId": "wjRLojxFK4I",
    "videoUrl": "https://www.youtube.com/watch?v=wjRLojxFK4I",
    "poster": "https://static.wixstatic.com/media/c691b9_6535696fd72241a7adb357e1670f5ec7~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_6535696fd72241a7adb357e1670f5ec7~mv2.jpg"
  },
  {
    "id": "vid-3",
    "title": "Endüstriyel & Kurumsal Tanıtım Prodüksiyonu",
    "category": "Tanıtım & Kurumsal",
    "videoId": "k-7FKpi6OYI",
    "videoUrl": "https://www.youtube.com/watch?v=k-7FKpi6OYI",
    "poster": "https://static.wixstatic.com/media/c691b9_d325bb68e6294f16831939dc3d0fd97a~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_d325bb68e6294f16831939dc3d0fd97a~mv2.jpg"
  },
  {
    "id": "vid-4",
    "title": "Sahne & Etkinlik Atmosferi Özeti",
    "category": "Etkinlik & Sahne",
    "videoId": "2FVFGhz95v4",
    "videoUrl": "https://www.youtube.com/watch?v=2FVFGhz95v4",
    "poster": "https://static.wixstatic.com/media/c691b9_a859aa94ea3e4176a4cc9c8c91e23373~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_a859aa94ea3e4176a4cc9c8c91e23373~mv2.jpg"
  },
  {
    "id": "vid-5",
    "title": "Backstage & Prodüksiyon Kamera Arkası",
    "category": "Moda & Klip",
    "videoId": "qivuWNlIExQ",
    "videoUrl": "https://www.youtube.com/watch?v=qivuWNlIExQ",
    "poster": "https://static.wixstatic.com/media/c691b9_1156bddc002a4004840d682ec1255d34~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_1156bddc002a4004840d682ec1255d34~mv2.jpg"
  },
  {
    "id": "vid-6",
    "title": "Sinematik Dış Mekan Çekim Klibi",
    "category": "Düğün Hikayesi",
    "videoId": "l0D_S56BCz8",
    "videoUrl": "https://www.youtube.com/watch?v=l0D_S56BCz8",
    "poster": "https://static.wixstatic.com/media/c691b9_d0abccab88fc4ea6922e207ab56b3e52~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_d0abccab88fc4ea6922e207ab56b3e52~mv2.jpg"
  },
  {
    "id": "vid-7",
    "title": "Kreatif Işık & Portre Prodüksiyonu",
    "category": "Moda & Klip",
    "videoId": "axLdnT8VFvk",
    "videoUrl": "https://www.youtube.com/watch?v=axLdnT8VFvk",
    "poster": "https://static.wixstatic.com/media/c691b9_78adbfc297324bb285d41e404738a8a2~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_78adbfc297324bb285d41e404738a8a2~mv2.jpg"
  },
  {
    "id": "vid-8",
    "title": "Özel Organizasyon & Gala Gecesi",
    "category": "Etkinlik & Sahne",
    "videoId": "5ohaCk94JaM",
    "videoUrl": "https://www.youtube.com/watch?v=5ohaCk94JaM",
    "poster": "https://static.wixstatic.com/media/c691b9_79b4c188a6784bd685e6ebe8c6ddab23~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_79b4c188a6784bd685e6ebe8c6ddab23~mv2.jpg"
  },
  {
    "id": "vid-9",
    "title": "Marka & Ürün Tanıtım Filmi",
    "category": "Tanıtım & Kurumsal",
    "videoId": "wqD-94eK9pQ",
    "videoUrl": "https://www.youtube.com/watch?v=wqD-94eK9pQ",
    "poster": "https://static.wixstatic.com/media/c691b9_24ffd13d0e1049f9a9dec7e258dd26b5~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_24ffd13d0e1049f9a9dec7e258dd26b5~mv2.jpg"
  },
  {
    "id": "vid-10",
    "title": "Sinematik Çift & Hikaye Klibi I",
    "category": "Düğün Hikayesi",
    "videoId": "7x6qXorczQs",
    "videoUrl": "https://www.youtube.com/watch?v=7x6qXorczQs",
    "poster": "https://static.wixstatic.com/media/c691b9_e73e157248094c508fcc20b9582f047c~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_e73e157248094c508fcc20b9582f047c~mv2.jpg"
  },
  {
    "id": "vid-11",
    "title": "Moda & Editoryal Çekim Günlüğü",
    "category": "Moda & Klip",
    "videoId": "gcO0G35KAss",
    "videoUrl": "https://www.youtube.com/watch?v=gcO0G35KAss",
    "poster": "https://static.wixstatic.com/media/c691b9_7e2f1128b9f543de9d6dcb1d6be350c3~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_7e2f1128b9f543de9d6dcb1d6be350c3~mv2.jpg"
  },
  {
    "id": "vid-12",
    "title": "Kurumsal İletişim & İmaj Filmi",
    "category": "Tanıtım & Kurumsal",
    "videoId": "y7DYACD_UEQ",
    "videoUrl": "https://www.youtube.com/watch?v=y7DYACD_UEQ",
    "poster": "https://static.wixstatic.com/media/c691b9_2fcf90a3fb6f45a680bf9ddfb361d007~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_2fcf90a3fb6f45a680bf9ddfb361d007~mv2.jpg"
  },
  {
    "id": "vid-13",
    "title": "Festival & Konser Sahne Performansı",
    "category": "Etkinlik & Sahne",
    "videoId": "zRD5WfG29KQ",
    "videoUrl": "https://www.youtube.com/watch?v=zRD5WfG29KQ",
    "poster": "https://static.wixstatic.com/media/c691b9_c65026788d134c92acf732a6118a2700~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_c65026788d134c92acf732a6118a2700~mv2.jpg"
  },
  {
    "id": "vid-14",
    "title": "Sinematik Düğün Hikayesi II",
    "category": "Düğün Hikayesi",
    "videoId": "FxhA1Xaq5os",
    "videoUrl": "https://www.youtube.com/watch?v=FxhA1Xaq5os",
    "poster": "https://static.wixstatic.com/media/c691b9_977fd8e01f5049e7b1fdb68334f7d701~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_977fd8e01f5049e7b1fdb68334f7d701~mv2.jpg"
  },
  {
    "id": "vid-15",
    "title": "Stüdyo & Lokasyon Prodüksiyon Klibi",
    "category": "Moda & Klip",
    "videoId": "_ZeXxKQcv7g",
    "videoUrl": "https://www.youtube.com/watch?v=_ZeXxKQcv7g",
    "poster": "https://static.wixstatic.com/media/c691b9_9c4443916893417c8514968d2f5c9449~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_9c4443916893417c8514968d2f5c9449~mv2.jpg"
  },
  {
    "id": "vid-16",
    "title": "Sinematik Düğün Hikayesi III",
    "category": "Düğün Hikayesi",
    "videoId": "EzoboYjO5mY",
    "videoUrl": "https://www.youtube.com/watch?v=EzoboYjO5mY",
    "poster": "https://static.wixstatic.com/media/c691b9_0c9a54435b3545f89e36449e379a1470~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_0c9a54435b3545f89e36449e379a1470~mv2.jpg"
  },
  {
    "id": "vid-17",
    "title": "Kurumsal Etkinlik & Lansman Özeti",
    "category": "Etkinlik & Sahne",
    "videoId": "OyYdKFgMo9g",
    "videoUrl": "https://www.youtube.com/watch?v=OyYdKFgMo9g",
    "poster": "https://static.wixstatic.com/media/c691b9_7f8f27ca9b8b467994cc614ed69c89b0~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_7f8f27ca9b8b467994cc614ed69c89b0~mv2.jpg"
  },
  {
    "id": "vid-18",
    "title": "Dış Mekan Gün Batımı Çekim Klibi",
    "category": "Düğün Hikayesi",
    "videoId": "RkX0z8t80TM",
    "videoUrl": "https://www.youtube.com/watch?v=RkX0z8t80TM",
    "poster": "https://static.wixstatic.com/media/c691b9_e03b048983d742c4b1c3d2d124abbbaf~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_e03b048983d742c4b1c3d2d124abbbaf~mv2.jpg"
  },
  {
    "id": "vid-19",
    "title": "Photo Media Works — Özel Proje I",
    "category": "Tanıtım & Kurumsal",
    "videoId": "l2hyStpEoDE",
    "videoUrl": "https://www.youtube.com/watch?v=l2hyStpEoDE",
    "poster": "https://static.wixstatic.com/media/c691b9_789845e261d14293bc1d1999c8d59b24~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_789845e261d14293bc1d1999c8d59b24~mv2.jpg"
  },
  {
    "id": "vid-20",
    "title": "Photo Media Works — Özel Proje II",
    "category": "Moda & Klip",
    "videoId": "jUWSfJYvbqQ",
    "videoUrl": "https://www.youtube.com/watch?v=jUWSfJYvbqQ",
    "poster": "https://static.wixstatic.com/media/c691b9_8a9181f911d14d0f80c649729fbdf95a~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_8a9181f911d14d0f80c649729fbdf95a~mv2.jpg"
  },
  {
    "id": "vid-21",
    "title": "Sinematik Düğün Hikayesi IV",
    "category": "Düğün Hikayesi",
    "videoId": "VISWcb2-_4s",
    "videoUrl": "https://www.youtube.com/watch?v=VISWcb2-_4s",
    "poster": "https://static.wixstatic.com/media/c691b9_0abfda83f35445749641f244982c782c~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_0abfda83f35445749641f244982c782c~mv2.jpg"
  },
  {
    "id": "vid-22",
    "title": "Lal Fotoğrafçılık & Prodüksiyon — Seçki I",
    "category": "Tanıtım & Kurumsal",
    "videoId": "cm3g7Nf-evQ",
    "videoUrl": "https://www.youtube.com/watch?v=cm3g7Nf-evQ",
    "poster": "https://static.wixstatic.com/media/c691b9_7654b6f4f4b64071af9d08fd063d5d40~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_7654b6f4f4b64071af9d08fd063d5d40~mv2.jpg"
  },
  {
    "id": "vid-23",
    "title": "Lal Fotoğrafçılık & Prodüksiyon — Seçki II",
    "category": "Tanıtım & Kurumsal",
    "videoId": "gGskRzZouXo",
    "videoUrl": "https://www.youtube.com/watch?v=gGskRzZouXo",
    "poster": "https://static.wixstatic.com/media/c691b9_3f5c5ff82079446e9d2b7a3ea0ec3ff1~mv2.jpg/v1/fill/w_720,h_405,al_c,q_85/c691b9_3f5c5ff82079446e9d2b7a3ea0ec3ff1~mv2.jpg"
  }
];

// ============================================================================
// UYGULAMA DURUMU (STATE)
// ============================================================================
let state = {
  albums: [],
  videos: [],
  activeMainView: 'albums',     // 'albums' | 'allphotos' | 'videos' | 'about'
  activeAlbumCategory: 'all',
  activeRollCategory: 'all',
  currentOpenAlbumId: null,
  gridDensity: 'square',        // 'square' | 'aspect'

  // Tam ekran fotoğraf görüntüleyici (iOS Photos)
  viewerOpen: false,
  viewerSourceList: [],         // [{ id, thumb, full, caption, albumTitle }]
  viewerIndex: 0,
  viewerZoomed: false,
  slideshowTimer: null,

  // Video oynatıcı
  activeVideoIndex: 0,

  // Yönetim Paneli (CMS) yeni albüm için geçici fotoğraflar
  stagedNewAlbumPhotos: []
};

// ============================================================================
// VERİ YÜKLEME VE KAYDETME
// ============================================================================
function loadStateFromStorage() {
  try {
    const savedAlbums = localStorage.getItem(STORAGE_KEYS.ALBUMS);
    const savedVideos = localStorage.getItem(STORAGE_KEYS.VIDEOS);
    state.albums = savedAlbums ? JSON.parse(savedAlbums) : JSON.parse(JSON.stringify(INITIAL_ALBUMS));
    state.videos = savedVideos ? JSON.parse(savedVideos) : JSON.parse(JSON.stringify(INITIAL_VIDEOS));
  } catch (err) {
    console.warn('Depolama okunamadı, varsayılan veriler yüklendi:', err);
    state.albums = JSON.parse(JSON.stringify(INITIAL_ALBUMS));
    state.videos = JSON.parse(JSON.stringify(INITIAL_VIDEOS));
  }
}

function saveAlbumsToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.ALBUMS, JSON.stringify(state.albums));
  } catch (err) {
    showToast('Tarayıcı hafızası doldu! Daha küçük boyutlu görsel deneyin.');
  }
  updateHeaderCounters();
}

function saveVideosToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.VIDEOS, JSON.stringify(state.videos));
  } catch (err) {
    console.error(err);
  }
  updateHeaderCounters();
}

function updateHeaderCounters() {
  const totalAlbums = state.albums.length;
  const totalPhotos = state.albums.reduce((acc, alb) => acc + (alb.photos ? alb.photos.length : 0), 0);
  const totalVideos = state.videos.length;

  const elAlb = document.getElementById('badgeAlbumsCount');
  const elPho = document.getElementById('badgePhotosCount');
  const elVid = document.getElementById('badgeVideosCount');

  if (elAlb) elAlb.textContent = totalAlbums;
  if (elPho) elPho.textContent = totalPhotos;
  if (elVid) elVid.textContent = totalVideos;
}

// ============================================================================
// ANA GÖRÜNÜM GEÇİŞLERİ (ALBÜMLER | TÜM FOTOĞRAFLAR | VİDEOLAR | HAKKINDA)
// ============================================================================
function switchMainView(viewName) {
  state.activeMainView = viewName;
  state.currentOpenAlbumId = null;

  // Üst segmented control
  document.querySelectorAll('.ios-segmented-control .seg-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === viewName);
  });

  // Mobil alt bar
  document.querySelectorAll('.mobile-bottom-nav .m-nav-item[data-mview]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mview === viewName);
  });

  // Bölümleri göster/gizle
  const map = {
    albums: 'viewAlbums',
    allphotos: 'viewAllPhotos',
    videos: 'viewVideos',
    about: 'viewAbout'
  };

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const targetId = map[viewName] || 'viewAlbums';
  const targetEl = document.getElementById(targetId);
  if (targetEl) targetEl.classList.add('active');

  if (viewName === 'albums') renderAlbumsGrid();
  if (viewName === 'allphotos') renderAllPhotosRoll();
  if (viewName === 'videos') renderVideosGrid();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// 1. ALBÜMLER EKRANI (TELEFON "ALBÜMLERİM" GÖRÜNÜMÜ)
// ============================================================================
function renderAlbumsGrid() {
  const grid = document.getElementById('albumsGrid');
  if (!grid) return;

  const filtered = state.activeAlbumCategory === 'all'
    ? state.albums
    : state.albums.filter(a => a.category === state.activeAlbumCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);padding:24px 0;">Bu kategoride henüz albüm bulunmuyor.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(album => {
    const count = album.photos ? album.photos.length : 0;
    const coverUrl = album.cover || (album.photos[0] && album.photos[0].thumb) || '';
    const subThumbs = (album.photos || []).slice(1, 4);

    return `
      <article class="album-card" onclick="openAlbumDetail('${album.id}')">
        <div class="album-cover-box">
          <img src="${coverUrl}" alt="${escapeHtml(album.title)}" loading="lazy" class="album-cover-main">
          <span class="album-cat-tag">${escapeHtml(album.category)}</span>
          ${subThumbs.length > 0 ? `
            <div class="album-mini-stack">
              ${subThumbs.map(p => `<img src="${p.thumb}" alt="" loading="lazy" class="album-mini-thumb">`).join('')}
            </div>
          ` : ''}
        </div>

        <div class="album-meta">
          <h3 class="album-title">${escapeHtml(album.title)}</h3>
          <span class="album-count">${count} Fotoğraf</span>
        </div>
      </article>
    `;
  }).join('');
}

// ============================================================================
// 2. ALBÜM İÇİ FOTOĞRAFLAR (TELEFON GALERİSİ IZGARASI)
// ============================================================================
function openAlbumDetail(albumId) {
  const album = state.albums.find(a => a.id === albumId);
  if (!album) return;

  state.currentOpenAlbumId = albumId;

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const detailSec = document.getElementById('viewAlbumDetail');
  if (detailSec) detailSec.classList.add('active');

  document.getElementById('openAlbumCategory').textContent = album.category;
  document.getElementById('openAlbumTitle').textContent = album.title;
  document.getElementById('openAlbumCount').textContent = `${album.photos.length} Fotoğraf`;
  document.getElementById('openAlbumDesc').textContent = album.description || '';

  renderOpenAlbumPhotos();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeAlbumDetail() {
  state.currentOpenAlbumId = null;
  switchMainView('albums');
}

function setGridDensity(density) {
  state.gridDensity = density === 'aspect' ? 'aspect' : 'square';
  document.querySelectorAll('.density-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.density === state.gridDensity);
  });

  const albumGrid = document.getElementById('albumPhotosGrid');
  if (albumGrid) {
    albumGrid.classList.toggle('density-square', state.gridDensity === 'square');
    albumGrid.classList.toggle('density-aspect', state.gridDensity === 'aspect');
  }
}

function renderOpenAlbumPhotos() {
  const album = state.albums.find(a => a.id === state.currentOpenAlbumId);
  const grid = document.getElementById('albumPhotosGrid');
  if (!album || !grid) return;

  grid.classList.toggle('density-square', state.gridDensity === 'square');
  grid.classList.toggle('density-aspect', state.gridDensity === 'aspect');

  if (!album.photos || album.photos.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);padding:24px 0;grid-column:1/-1;">Bu albümde henüz fotoğraf yok. Üstteki "+ Fotoğraf Ekle" butonundan yükleyebilirsiniz.</p>`;
    return;
  }

  grid.innerHTML = album.photos.map((photo, index) => `
    <div class="photo-grid-item" onclick="openPhotoViewer('album', ${index})" role="button" tabindex="0" aria-label="Fotoğraf ${index + 1}">
      <img src="${photo.thumb}" alt="${escapeHtml(photo.caption || album.title)}" loading="lazy" class="photo-grid-img">
    </div>
  `).join('');
}

function startAlbumSlideshow() {
  const album = state.albums.find(a => a.id === state.currentOpenAlbumId);
  if (!album || !album.photos.length) return;
  openPhotoViewer('album', 0);
  if (!state.slideshowTimer) {
    toggleViewerSlideshow();
  }
}

// ============================================================================
// 3. TÜM FOTOĞRAFLAR (FİLM RULOSU / ARŞİV AKIŞI)
// ============================================================================
function getFilteredRollPhotos() {
  const list = [];
  state.albums.forEach(album => {
    if (state.activeRollCategory !== 'all' && album.category !== state.activeRollCategory) return;
    (album.photos || []).forEach((p, idx) => {
      list.push({
        id: p.id,
        thumb: p.thumb,
        full: p.full,
        caption: `${album.title} (${idx + 1}/${album.photos.length})`,
        albumTitle: album.title,
        category: album.category
      });
    });
  });
  return list;
}

function renderAllPhotosRoll() {
  const grid = document.getElementById('allPhotosGrid');
  if (!grid) return;

  const list = getFilteredRollPhotos();
  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);padding:24px 0;grid-column:1/-1;">Bu filtrede fotoğraf bulunamadı.</p>`;
    return;
  }

  grid.innerHTML = list.map((item, idx) => `
    <div class="photo-grid-item" onclick="openPhotoViewer('allphotos', ${idx})" title="${escapeHtml(item.albumTitle)}" role="button" tabindex="0">
      <img src="${item.thumb}" alt="${escapeHtml(item.caption)}" loading="lazy" class="photo-grid-img">
    </div>
  `).join('');
}

// ============================================================================
// 4. VİDEOLAR GALERİSİ & OYNATICI (23 GERÇEK VİDEO)
// ============================================================================
function renderVideosGrid() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;

  if (state.videos.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);padding:24px 0;">Henüz video eklenmemiş.</p>`;
    return;
  }

  grid.innerHTML = state.videos.map((vid, idx) => `
    <article class="video-card" onclick="openVideoPlayer(${idx})">
      <div class="video-thumb-box">
        <img src="${vid.poster}" alt="${escapeHtml(vid.title)}" loading="lazy" class="video-thumb-img">
        <div class="video-play-circle">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
        </div>
      </div>
      <div class="video-card-info">
        <h3 class="video-card-title">${escapeHtml(vid.title)}</h3>
        <span class="video-card-tag">${escapeHtml(vid.category || 'Prodüksiyon')}</span>
      </div>
    </article>
  `).join('');
}

function openVideoPlayer(index) {
  if (index < 0 || index >= state.videos.length) return;
  state.activeVideoIndex = index;

  const modal = document.getElementById('videoPlayerModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  renderActiveVideoStage();
}

function renderActiveVideoStage() {
  const vid = state.videos[state.activeVideoIndex];
  if (!vid) return;

  document.getElementById('vpCounterBadge').textContent = `Video ${state.activeVideoIndex + 1} / ${state.videos.length}`;
  document.getElementById('vpTitleText').textContent = vid.title;

  const stage = document.getElementById('vpStageContainer');
  if (vid.videoId) {
    stage.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${vid.videoId}?autoplay=1&rel=0&modestbranding=1"
        title="${escapeHtml(vid.title)}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
  } else {
    stage.innerHTML = `
      <video src="${vid.videoUrl}" poster="${vid.poster || ''}" controls autoplay playsinline></video>
    `;
  }
}

function closeVideoPlayer() {
  const modal = document.getElementById('videoPlayerModal');
  const stage = document.getElementById('vpStageContainer');
  if (stage) stage.innerHTML = '';
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function prevVideoItem() {
  if (!state.videos.length) return;
  state.activeVideoIndex = (state.activeVideoIndex - 1 + state.videos.length) % state.videos.length;
  renderActiveVideoStage();
}

function nextVideoItem() {
  if (!state.videos.length) return;
  state.activeVideoIndex = (state.activeVideoIndex + 1) % state.videos.length;
  renderActiveVideoStage();
}

// ============================================================================
// 5. TAM EKRAN TELEFON FOTOĞRAF GÖRÜNTÜLEYİCİ (iOS PHOTOS DENEYİMİ)
// ============================================================================
function openPhotoViewer(sourceType, index) {
  let list = [];
  if (sourceType === 'album') {
    const album = state.albums.find(a => a.id === state.currentOpenAlbumId);
    if (!album) return;
    list = album.photos.map(p => ({
      id: p.id,
      thumb: p.thumb,
      full: p.full,
      caption: p.caption || album.title,
      albumTitle: album.title
    }));
  } else {
    list = getFilteredRollPhotos();
  }

  if (!list.length) return;

  state.viewerSourceList = list;
  state.viewerIndex = Math.max(0, Math.min(index, list.length - 1));
  state.viewerOpen = true;
  state.viewerZoomed = false;

  const viewer = document.getElementById('iosPhotoViewer');
  viewer.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  renderScrubberThumbnails();
  updateViewerFrame();
}

function closePhotoViewer() {
  stopViewerSlideshow();
  state.viewerOpen = false;
  state.viewerZoomed = false;
  const img = document.getElementById('viewerMainImg');
  if (img) img.classList.remove('zoomed');

  const viewer = document.getElementById('iosPhotoViewer');
  if (viewer) viewer.classList.add('hidden');
  document.body.style.overflow = '';
}

function renderScrubberThumbnails() {
  const track = document.getElementById('viewerScrubberTrack');
  if (!track) return;

  track.innerHTML = state.viewerSourceList.map((item, idx) => `
    <img
      src="${item.thumb}"
      alt=""
      loading="lazy"
      class="scrubber-thumb ${idx === state.viewerIndex ? 'active' : ''}"
      data-sidx="${idx}"
      onclick="jumpToViewerPhoto(${idx})"
    >
  `).join('');
}

function jumpToViewerPhoto(index) {
  if (index < 0 || index >= state.viewerSourceList.length) return;
  state.viewerIndex = index;
  state.viewerZoomed = false;
  updateViewerFrame();
}

function stepViewerPhoto(dir) {
  const total = state.viewerSourceList.length;
  if (!total) return;
  state.viewerIndex = (state.viewerIndex + dir + total) % total;
  state.viewerZoomed = false;
  updateViewerFrame();
}

function updateViewerFrame() {
  const item = state.viewerSourceList[state.viewerIndex];
  if (!item) return;

  const total = state.viewerSourceList.length;
  document.getElementById('viewerAlbumName').textContent = item.albumTitle || 'Portfolyo';
  document.getElementById('viewerCounterText').textContent = `${state.viewerIndex + 1} / ${total}`;

  const img = document.getElementById('viewerMainImg');
  img.classList.remove('zoomed');
  img.style.transform = '';

  img.src = item.full || item.thumb;
  img.alt = item.caption || '';

  // Komşu fotoğrafları önden yükle (Sıfır bekleme süresi)
  preloadNeighborPhotos(state.viewerIndex);

  // WhatsApp bilgi al linkini aktif fotoğrafa göre güncelle
  const waBtn = document.getElementById('viewerWhatsAppBtn');
  if (waBtn) {
    const msg = `Merhaba Alihan Bey, portfolyonuzdaki "${item.albumTitle}" albümü (${state.viewerIndex + 1}. fotoğraf) hakkında bilgi almak istiyorum.`;
    waBtn.href = `https://wa.me/905326358335?text=${encodeURIComponent(msg)}`;
  }

  // Alt film şeridinde aktif olanı işaretle ve ortala
  const track = document.getElementById('viewerScrubberTrack');
  if (track) {
    const thumbs = track.querySelectorAll('.scrubber-thumb');
    thumbs.forEach((el, idx) => {
      const isAct = idx === state.viewerIndex;
      el.classList.toggle('active', isAct);
      if (isAct) {
        el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }
}

function preloadNeighborPhotos(centerIdx) {
  const total = state.viewerSourceList.length;
  if (total <= 1) return;
  [-1, 1, 2].forEach(offset => {
    const idx = (centerIdx + offset + total) % total;
    const neighbor = state.viewerSourceList[idx];
    if (neighbor && neighbor.full) {
      const pre = new Image();
      pre.src = neighbor.full;
    }
  });
}

function toggleViewerZoom() {
  const img = document.getElementById('viewerMainImg');
  if (!img) return;
  state.viewerZoomed = !state.viewerZoomed;
  img.classList.toggle('zoomed', state.viewerZoomed);
}

function toggleViewerSlideshow() {
  const btn = document.getElementById('btnSlideshowToggle');
  if (state.slideshowTimer) {
    stopViewerSlideshow();
    showToast('Slayt gösterisi durduruldu');
  } else {
    if (btn) btn.classList.add('active');
    state.slideshowTimer = setInterval(() => {
      stepViewerPhoto(1);
    }, 2800);
    showToast('Otomatik slayt başladı');
  }
}

function stopViewerSlideshow() {
  if (state.slideshowTimer) {
    clearInterval(state.slideshowTimer);
    state.slideshowTimer = null;
  }
  const btn = document.getElementById('btnSlideshowToggle');
  if (btn) btn.classList.remove('active');
}

// Dokunmatik (Swipe Left/Right & Pull-Down to Close) Kurulumu
function initTouchGestures() {
  const stage = document.getElementById('viewerTouchStage');
  const img = document.getElementById('viewerMainImg');
  if (!stage || !img) return;

  let startX = 0;
  let startY = 0;
  let deltaX = 0;
  let deltaY = 0;
  let tracking = false;
  let lastTapTime = 0;

  stage.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    deltaX = 0;
    deltaY = 0;
    tracking = true;
    img.style.transition = 'none';
  }, { passive: true });

  stage.addEventListener('touchmove', e => {
    if (!tracking || state.viewerZoomed) return;
    deltaX = e.touches[0].clientX - startX;
    deltaY = e.touches[0].clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      img.style.transform = `translateX(${deltaX * 0.65}px)`;
    } else if (deltaY > 0) {
      const scale = Math.max(0.82, 1 - deltaY / 600);
      img.style.transform = `translateY(${deltaY * 0.7}px) scale(${scale})`;
    }
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    if (!tracking) return;
    tracking = false;
    img.style.transition = 'transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)';

    // Çift dokunuş (Double tap zoom)
    const now = Date.now();
    if (Math.abs(deltaX) < 12 && Math.abs(deltaY) < 12) {
      if (now - lastTapTime < 280) {
        toggleViewerZoom();
        lastTapTime = 0;
        return;
      }
      lastTapTime = now;
    }

    if (!state.viewerZoomed) {
      if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) {
        img.style.transform = '';
        if (deltaX < 0) stepViewerPhoto(1);
        else stepViewerPhoto(-1);
        return;
      }
      if (deltaY > 95 && Math.abs(deltaY) > Math.abs(deltaX)) {
        img.style.transform = '';
        closePhotoViewer();
        return;
      }
    }
    img.style.transform = '';
  });

  img.addEventListener('dblclick', () => {
    toggleViewerZoom();
  });
}

// ============================================================================
// 6. YÖNETİM PANELİ (CMS — ALİHAN BEY'İN İÇERİK YÖNETİM SİSTEMİ)
// ============================================================================
function openCMS(initialTab = 'manage') {
  const modal = document.getElementById('cmsModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  renderCMSManageList();
  populateEditAlbumSelect();
  renderCMSVideosList();
  switchCMSTab(initialTab);
}

function openCMSForCurrentAlbum() {
  const currentId = state.currentOpenAlbumId;
  openCMS('editAlbum');
  if (currentId) {
    const sel = document.getElementById('selectAlbumToEdit');
    if (sel) {
      sel.value = currentId;
      renderSelectedAlbumEditor();
    }
  }
}

function closeCMS() {
  const modal = document.getElementById('cmsModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';

  renderAlbumsGrid();
  if (state.currentOpenAlbumId) renderOpenAlbumPhotos();
  renderAllPhotosRoll();
  renderVideosGrid();
}

function switchCMSTab(tabName) {
  document.querySelectorAll('.cms-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cmstab === tabName);
  });

  const paneMap = {
    manage: 'cmsPaneManage',
    editAlbum: 'cmsPaneEditAlbum',
    newAlbum: 'cmsPaneNewAlbum',
    addVideo: 'cmsPaneAddVideo'
  };

  document.querySelectorAll('.cms-pane').forEach(p => p.classList.remove('active'));
  const targetPane = document.getElementById(paneMap[tabName] || 'cmsPaneManage');
  if (targetPane) targetPane.classList.add('active');

  if (tabName === 'manage') renderCMSManageList();
  if (tabName === 'editAlbum') {
    populateEditAlbumSelect();
    renderSelectedAlbumEditor();
  }
  if (tabName === 'addVideo') renderCMSVideosList();
}

// SEKME 1: Albümleri Sırala / Düzenle / Sil
function renderCMSManageList() {
  const listEl = document.getElementById('cmsAlbumsList');
  if (!listEl) return;

  listEl.innerHTML = state.albums.map((alb, idx) => {
    const cover = alb.cover || (alb.photos[0] && alb.photos[0].thumb) || '';
    return `
      <div class="cms-list-row">
        <div class="cms-row-info">
          <img src="${cover}" alt="" class="cms-row-thumb">
          <div>
            <div class="cms-row-title">${escapeHtml(alb.title)}</div>
            <div class="cms-row-sub">${escapeHtml(alb.category)} • ${alb.photos.length} Fotoğraf</div>
          </div>
        </div>
        <div class="cms-row-actions">
          <button type="button" class="btn-cms-mini" onclick="moveAlbumOrder(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} title="Yukarı Taşı">↑</button>
          <button type="button" class="btn-cms-mini" onclick="moveAlbumOrder(${idx}, 1)" ${idx === state.albums.length - 1 ? 'disabled' : ''} title="Aşağı Taşı">↓</button>
          <button type="button" class="btn-cms-mini blue" onclick="jumpToEditAlbum('${alb.id}')">Fotoğrafları Yönet</button>
          <button type="button" class="btn-cms-mini danger" onclick="deleteAlbumItem('${alb.id}')">Sil</button>
        </div>
      </div>
    `;
  }).join('');
}

function moveAlbumOrder(index, direction) {
  const targetIdx = index + direction;
  if (targetIdx < 0 || targetIdx >= state.albums.length) return;
  const temp = state.albums[index];
  state.albums[index] = state.albums[targetIdx];
  state.albums[targetIdx] = temp;
  saveAlbumsToStorage();
  renderCMSManageList();
  showToast('Albüm sıralaması güncellendi');
}

function jumpToEditAlbum(albumId) {
  switchCMSTab('editAlbum');
  const sel = document.getElementById('selectAlbumToEdit');
  if (sel) {
    sel.value = albumId;
    renderSelectedAlbumEditor();
  }
}

function deleteAlbumItem(albumId) {
  const alb = state.albums.find(a => a.id === albumId);
  if (!alb) return;
  if (!confirm(`"${alb.title}" albümünü silmek istediğinize emin misiniz?`)) return;

  state.albums = state.albums.filter(a => a.id !== albumId);
  saveAlbumsToStorage();
  renderCMSManageList();
  showToast('Albüm silindi');
}

// SEKME 2: Seçili Albümün İçine Fotoğraf Ekle / Kapak Yap / Sil
function populateEditAlbumSelect() {
  const sel = document.getElementById('selectAlbumToEdit');
  if (!sel) return;
  const currentVal = sel.value;
  sel.innerHTML = state.albums.map(a => `
    <option value="${a.id}">${escapeHtml(a.title)} (${a.photos.length} Fotoğraf)</option>
  `).join('');

  if (currentVal && state.albums.some(a => a.id === currentVal)) {
    sel.value = currentVal;
  } else if (state.currentOpenAlbumId && state.albums.some(a => a.id === state.currentOpenAlbumId)) {
    sel.value = state.currentOpenAlbumId;
  }
}

function renderSelectedAlbumEditor() {
  const sel = document.getElementById('selectAlbumToEdit');
  const grid = document.getElementById('cmsAlbumPhotosEditorGrid');
  const countLabel = document.getElementById('editAlbumPhotosCountLabel');
  if (!sel || !grid) return;

  const album = state.albums.find(a => a.id === sel.value);
  if (!album) {
    grid.innerHTML = '';
    return;
  }

  if (countLabel) {
    countLabel.textContent = `"${album.title}" Albümündeki Fotoğraflar (${album.photos.length} Adet)`;
  }

  grid.innerHTML = album.photos.map((p, idx) => {
    const isCover = album.cover === p.thumb || album.cover === p.full;
    return `
      <div class="cms-photo-edit-card">
        <img src="${p.thumb}" alt="" loading="lazy">
        <div class="cms-photo-overlay-actions">
          <button type="button" class="btn-del-single-photo" onclick="deleteSinglePhotoFromAlbum('${album.id}', '${p.id}')" title="Fotoğrafı Sil">&times;</button>
          <button type="button" class="btn-set-cover ${isCover ? 'is-cover' : ''}" onclick="setPhotoAsAlbumCover('${album.id}', '${p.id}')">
            ${isCover ? '★ Kapak' : 'Kapak Yap'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function setPhotoAsAlbumCover(albumId, photoId) {
  const album = state.albums.find(a => a.id === albumId);
  if (!album) return;
  const photo = album.photos.find(p => p.id === photoId);
  if (!photo) return;

  album.cover = photo.thumb;
  saveAlbumsToStorage();
  renderSelectedAlbumEditor();
  showToast('Albüm kapağı güncellendi');
}

function deleteSinglePhotoFromAlbum(albumId, photoId) {
  const album = state.albums.find(a => a.id === albumId);
  if (!album) return;
  album.photos = album.photos.filter(p => p.id !== photoId);
  if (album.photos.length > 0 && !album.photos.some(p => p.thumb === album.cover)) {
    album.cover = album.photos[0].thumb;
  }
  saveAlbumsToStorage();
  populateEditAlbumSelect();
  renderSelectedAlbumEditor();
  showToast('Fotoğraf albümden kaldırıldı');
}

// Görsel Dosyalarını Sıkıştırarak Base64'e Çevirme (Telefon/Bilgisayar Yüklemeleri İçin)
function compressImageFile(file, maxWidth = 1400, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;
        if (w > maxWidth) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve({ dataUrl, width: w, height: h });
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleAddPhotosToExistingAlbum(fileList) {
  const sel = document.getElementById('selectAlbumToEdit');
  if (!sel || !sel.value) return;
  const album = state.albums.find(a => a.id === sel.value);
  if (!album) return;

  const files = Array.from(fileList).filter(f => f.type.startsWith('image/'));
  if (!files.length) return;

  showToast(`${files.length} fotoğraf işleniyor...`);
  for (const file of files) {
    try {
      const res = await compressImageFile(file);
      const newPhoto = {
        id: `${album.id}-u${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        thumb: res.dataUrl,
        full: res.dataUrl,
        width: res.width,
        height: res.height,
        caption: `${album.title} — Yeni Fotoğraf`
      };
      album.photos.unshift(newPhoto);
      if (!album.cover) album.cover = newPhoto.thumb;
    } catch (err) {
      console.error('Görsel eklenemedi:', err);
    }
  }

  saveAlbumsToStorage();
  populateEditAlbumSelect();
  renderSelectedAlbumEditor();
  showToast(`${files.length} yeni fotoğraf "${album.title}" albümüne eklendi!`);
}

// SEKME 3: Yeni Albüm Oluşturma
async function handleStageNewAlbumFiles(fileList) {
  const files = Array.from(fileList).filter(f => f.type.startsWith('image/'));
  if (!files.length) return;

  showToast(`${files.length} fotoğraf hazırlanıyor...`);
  for (const file of files) {
    try {
      const res = await compressImageFile(file);
      state.stagedNewAlbumPhotos.push(res);
    } catch (e) {
      console.error(e);
    }
  }
  renderStagedNewAlbumGrid();
}

function renderStagedNewAlbumGrid() {
  const grid = document.getElementById('newAlbumStagedGrid');
  if (!grid) return;
  grid.innerHTML = state.stagedNewAlbumPhotos.map((item, idx) => `
    <div style="position:relative;">
      <img src="${item.dataUrl}" alt="" class="cms-staged-thumb">
      <button type="button" class="btn-del-single-photo" style="position:absolute;top:-5px;right:-5px;" onclick="removeStagedPhoto(${idx})">&times;</button>
    </div>
  `).join('');
}

function removeStagedPhoto(idx) {
  state.stagedNewAlbumPhotos.splice(idx, 1);
  renderStagedNewAlbumGrid();
}

// SEKME 4: Video Ekle & Yönet
function extractYouTubeId(url) {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|Spin\/|v\/|embed\/|shorts\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function renderCMSVideosList() {
  const listEl = document.getElementById('cmsVideosList');
  const countLabel = document.getElementById('cmsVideoCountLabel');
  if (countLabel) countLabel.textContent = state.videos.length;
  if (!listEl) return;

  listEl.innerHTML = state.videos.map((v, idx) => `
    <div class="cms-list-row">
      <div class="cms-row-info">
        <img src="${v.poster}" alt="" class="cms-row-thumb">
        <div>
          <div class="cms-row-title">${escapeHtml(v.title)}</div>
          <div class="cms-row-sub">${escapeHtml(v.category || 'Prodüksiyon')} • Video #${idx + 1}</div>
        </div>
      </div>
      <div class="cms-row-actions">
        <button type="button" class="btn-cms-mini danger" onclick="deleteVideoItem('${v.id}')">Sil</button>
      </div>
    </div>
  `).join('');
}

function deleteVideoItem(videoId) {
  state.videos = state.videos.filter(v => v.id !== videoId);
  saveVideosToStorage();
  renderCMSVideosList();
  showToast('Video silindi');
}

function resetAllToOriginal() {
  if (!confirm('Yaptığınız değişiklikleri sıfırlayıp Alihan Kutlu orijinal site verilerine dönmek istiyor musunuz?')) return;
  localStorage.removeItem(STORAGE_KEYS.ALBUMS);
  localStorage.removeItem(STORAGE_KEYS.VIDEOS);
  loadStateFromStorage();
  updateHeaderCounters();
  renderCMSManageList();
  populateEditAlbumSelect();
  renderSelectedAlbumEditor();
  renderCMSVideosList();
  showToast('Orijinal site verileri geri yüklendi');
}

// ============================================================================
// YARDIMCI FONKSİYONLAR VE EVENT LISTENER KURULUMU
// ============================================================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

let toastTimeout = null;
function showToast(message) {
  const el = document.getElementById('toastMsg');
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    el.classList.add('hidden');
  }, 2800);
}

document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  updateHeaderCounters();
  renderAlbumsGrid();
  renderAllPhotosRoll();
  renderVideosGrid();
  initTouchGestures();

  // Üst bar Yönetim Paneli butonu
  const btnOpenCMS = document.getElementById('btnOpenCMS');
  if (btnOpenCMS) {
    btnOpenCMS.addEventListener('click', () => openCMS('manage'));
  }

  // Albüm Kategori Filtreleri
  const albumFilter = document.getElementById('albumCategoryFilter');
  if (albumFilter) {
    albumFilter.addEventListener('click', e => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      state.activeAlbumCategory = btn.dataset.cat || 'all';
      albumFilter.querySelectorAll('.cat-pill').forEach(b => b.classList.toggle('active', b === btn));
      renderAlbumsGrid();
    });
  }

  // Tüm Fotoğraflar (Film Rulosu) Kategori Filtreleri
  const rollFilter = document.getElementById('allPhotosFilter');
  if (rollFilter) {
    rollFilter.addEventListener('click', e => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;
      state.activeRollCategory = btn.dataset.rollcat || 'all';
      rollFilter.querySelectorAll('.cat-pill').forEach(b => b.classList.toggle('active', b === btn));
      renderAllPhotosRoll();
    });
  }

  // Fotoğraf Görüntüleyici Kontrolleri
  document.getElementById('btnCloseViewer')?.addEventListener('click', closePhotoViewer);
  document.getElementById('btnStagePrev')?.addEventListener('click', () => stepViewerPhoto(-1));
  document.getElementById('btnStageNext')?.addEventListener('click', () => stepViewerPhoto(1));
  document.getElementById('btnZoomToggle')?.addEventListener('click', toggleViewerZoom);
  document.getElementById('btnSlideshowToggle')?.addEventListener('click', toggleViewerSlideshow);

  // Klavye Kısayolları (Ok tuşları ve ESC)
  document.addEventListener('keydown', e => {
    if (state.viewerOpen) {
      if (e.key === 'ArrowRight') stepViewerPhoto(1);
      else if (e.key === 'ArrowLeft') stepViewerPhoto(-1);
      else if (e.key === 'Escape') closePhotoViewer();
    } else if (!document.getElementById('videoPlayerModal')?.classList.contains('hidden')) {
      if (e.key === 'Escape') closeVideoPlayer();
      else if (e.key === 'ArrowRight') nextVideoItem();
      else if (e.key === 'ArrowLeft') prevVideoItem();
    } else if (!document.getElementById('cmsModal')?.classList.contains('hidden')) {
      if (e.key === 'Escape') closeCMS();
    }
  });

  // CMS: Mevcut Albüme Fotoğraf Yükleme (Dosya Seçimi & Sürükle Bırak)
  const editFileInput = document.getElementById('editAlbumFileInput');
  const editDropzone = document.getElementById('editAlbumDropzone');
  if (editFileInput) {
    editFileInput.addEventListener('change', e => {
      if (e.target.files?.length) {
        handleAddPhotosToExistingAlbum(e.target.files);
        editFileInput.value = '';
      }
    });
  }
  if (editDropzone) {
    editDropzone.addEventListener('dragover', e => { e.preventDefault(); editDropzone.classList.add('drag-over'); });
    editDropzone.addEventListener('dragleave', () => editDropzone.classList.remove('drag-over'));
    editDropzone.addEventListener('drop', e => {
      e.preventDefault();
      editDropzone.classList.remove('drag-over');
      if (e.dataTransfer?.files?.length) handleAddPhotosToExistingAlbum(e.dataTransfer.files);
    });
  }

  // CMS: Yeni Albüm Oluşturma (Dosya Seçimi & Sürükle Bırak & Form Submit)
  const newAlbumInput = document.getElementById('newAlbumFileInput');
  const newAlbumDrop = document.getElementById('newAlbumDropzone');
  const formNewAlbum = document.getElementById('formNewAlbum');

  if (newAlbumInput) {
    newAlbumInput.addEventListener('change', e => {
      if (e.target.files?.length) {
        handleStageNewAlbumFiles(e.target.files);
        newAlbumInput.value = '';
      }
    });
  }
  if (newAlbumDrop) {
    newAlbumDrop.addEventListener('dragover', e => { e.preventDefault(); newAlbumDrop.classList.add('drag-over'); });
    newAlbumDrop.addEventListener('dragleave', () => newAlbumDrop.classList.remove('drag-over'));
    newAlbumDrop.addEventListener('drop', e => {
      e.preventDefault();
      newAlbumDrop.classList.remove('drag-over');
      if (e.dataTransfer?.files?.length) handleStageNewAlbumFiles(e.dataTransfer.files);
    });
  }
  if (formNewAlbum) {
    formNewAlbum.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('newAlbumTitle').value.trim();
      const category = document.getElementById('newAlbumCat').value;
      const desc = document.getElementById('newAlbumDesc').value.trim();

      if (!title) return;
      if (state.stagedNewAlbumPhotos.length === 0) {
        alert('Lütfen yeni albüm için en az 1 fotoğraf seçin.');
        return;
      }

      const newAlbId = 'alb-custom-' + Date.now();
      const photos = state.stagedNewAlbumPhotos.map((item, idx) => ({
        id: `${newAlbId}-p${idx + 1}`,
        thumb: item.dataUrl,
        full: item.dataUrl,
        width: item.width,
        height: item.height,
        caption: `${title} — Kare #${idx + 1}`
      }));

      const newAlbum = {
        id: newAlbId,
        title,
        category,
        description: desc || `${title} özel çekim albümü.`,
        cover: photos[0].thumb,
        photos
      };

      state.albums.unshift(newAlbum);
      state.stagedNewAlbumPhotos = [];
      renderStagedNewAlbumGrid();
      formNewAlbum.reset();
      saveAlbumsToStorage();
      showToast(`"${title}" albümü yayına alındı!`);
      switchCMSTab('manage');
    });
  }

  // CMS: Yeni Video Ekleme Formu
  const formNewVideo = document.getElementById('formNewVideo');
  if (formNewVideo) {
    formNewVideo.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('newVideoTitle').value.trim();
      const category = document.getElementById('newVideoCat').value;
      const rawUrl = document.getElementById('newVideoUrl').value.trim();
      if (!title || !rawUrl) return;

      const ytId = extractYouTubeId(rawUrl);
      const newVideo = {
        id: 'vid-custom-' + Date.now(),
        title,
        category,
        videoId: ytId || '',
        videoUrl: rawUrl,
        poster: ytId
          ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
          : (state.albums[0]?.cover || '')
      };

      state.videos.unshift(newVideo);
      formNewVideo.reset();
      saveVideosToStorage();
      renderCMSVideosList();
      showToast(`"${title}" videosu galeriye eklendi!`);
    });
  }
});
