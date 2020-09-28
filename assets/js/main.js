import "../scss/styles.scss";

() => {
  const sceneInfo = [
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
        canvas: document.querySelector("#video-canvas-0"),
        context: document.querySelector("#video-canvas-0").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 375,
        imageSequence: [0, 374],
        canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
        messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
        messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
        messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
        messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
        messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
        messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
      },
    },
  ];

  function setCanvasImages() {
    let imgElem;
    for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
      imgElem = new Image();
      imgElem.src = `https://raw.githubusercontent.com/DAWUNHAN/recipe_book/master/public/img/fire/IMG_${
        1 + i
      }.jpg`;
      sceneInfo[0].objs.videoImages.push(imgElem);
    }
  }

  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    objs.canvas.style.opacity = calcValues(
      values.canvas_opacity,
      currentYOffset
    );

    if (scrollRatio <= 0.22) {
      // in
      objs.messageA.style.opacity = calcValues(
        values.messageA_opacity_in,
        currentYOffset
      );
      objs.messageA.style.transform = `translate3d(0, ${calcValues(
        values.messageA_translateY_in,
        currentYOffset
      )}%, 0)`;
    } else {
      // out
      objs.messageA.style.opacity = calcValues(
        values.messageA_opacity_out,
        currentYOffset
      );
      objs.messageA.style.transform = `translate3d(0, ${calcValues(
        values.messageA_translateY_out,
        currentYOffset
      )}%, 0)`;
    }

    if (scrollRatio <= 0.42) {
      // in
      objs.messageB.style.opacity = calcValues(
        values.messageB_opacity_in,
        currentYOffset
      );
      objs.messageB.style.transform = `translate3d(0, ${calcValues(
        values.messageB_translateY_in,
        currentYOffset
      )}%, 0)`;
    } else {
      // out
      objs.messageB.style.opacity = calcValues(
        values.messageB_opacity_out,
        currentYOffset
      );
      objs.messageB.style.transform = `translate3d(0, ${calcValues(
        values.messageB_translateY_out,
        currentYOffset
      )}%, 0)`;
    }

    if (scrollRatio <= 0.62) {
      // in
      objs.messageC.style.opacity = calcValues(
        values.messageC_opacity_in,
        currentYOffset
      );
      objs.messageC.style.transform = `translate3d(0, ${calcValues(
        values.messageC_translateY_in,
        currentYOffset
      )}%, 0)`;
    } else {
      // out
      objs.messageC.style.opacity = calcValues(
        values.messageC_opacity_out,
        currentYOffset
      );
      objs.messageC.style.transform = `translate3d(0, ${calcValues(
        values.messageC_translateY_out,
        currentYOffset
      )}%, 0)`;
    }

    if (scrollRatio <= 0.82) {
      // in
      objs.messageD.style.opacity = calcValues(
        values.messageD_opacity_in,
        currentYOffset
      );
      objs.messageD.style.transform = `translate3d(0, ${calcValues(
        values.messageD_translateY_in,
        currentYOffset
      )}%, 0)`;
    } else {
      // out
      objs.messageD.style.opacity = calcValues(
        values.messageD_opacity_out,
        currentYOffset
      );
      objs.messageD.style.transform = `translate3d(0, ${calcValues(
        values.messageD_translateY_out,
        currentYOffset
      )}%, 0)`;
    }
    window.addEventListener("load", () => {
      document.body.classList.remove("before-load");
      setLayout();
      sceneInfo[0].objs.context.drawImage(
        sceneInfo[0].objs.videoImages[0],
        0,
        0
      );

      window.addEventListener("scroll", () => {
        yOffset = window.pageYOffset;
        scrollLoop();
        checkMenu();

        if (!rafState) {
          rafId = requestAnimationFrame(loop);
          rafState = true;
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
          setLayout();
          sceneInfo[3].values.rectStartY = 0;
        }
      });

      window.addEventListener("orientationchange", setLayout);
    });

    document
      .querySelector(".loading")
      .addEventListener("transitionend", (e) => {
        document.body.removeChild(e.currentTarget);
      });
    setCanvasImages();
  }
};
