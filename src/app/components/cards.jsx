const CardVariant = ({ variant }) => {
  // Base styles object for different variants
  const variants = {
    topRight: {
      container: "rounded-bl-[15px] rounded-br-[15px] rounded-tl-[15px]",
      tab: "top-0 right-0 border-t-[10px] border-l-[10px] rounded-tl-[25px]",
      cutouts: {
        first: {
          position: "top-[70px] right-0",
          shadow: "10px -10px 0 #222",
        },
        second: {
          position: "top-0 left-[-25px]",
          shadow: "10px -10px 0 #fff",
        },
      },
    },
    bottomLeft: {
      container: "rounded-tr-[15px] rounded-tl-[15px] rounded-br-[15px]",
      tab: "bottom-0 left-0 border-b-[10px] border-r-[10px] rounded-br-[25px]",
      cutouts: {
        first: {
          position: "bottom-[70px] left-0",
          shadow: "-10px 10px 0 #222",
        },
        second: {
          position: "top-[-25px] right-[-25px]",
          shadow: "-10px 10px 0 #fff",
        },
      },
    },
    bottomRight: {
      container: "rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px]",
      tab: "bottom-0 right-0 border-b-[10px] border-l-[10px] rounded-bl-[25px]",
      cutouts: {
        first: {
          position: "bottom-[70px] right-0",
          shadow: "10px 10px 0 #222",
        },
        second: {
          position: "top-[-25px] left-[-25px]",
          shadow: "10px 10px 0 #fff",
        },
      },
    },
    diagonal: {
      container: "rounded-tr-[15px] rounded-bl-[15px]",
      tab: "top-[-80px] right-0 border-t-[10px] border-l-[10px] rounded-tl-[25px]",
      cutouts: {
        first: {
          position: "bottom-[70px] left-0",
          shadow: "-10px 10px 0 #222",
        },
        second: {
          position: "top-0 left-[-25px]",
          shadow: "10px -10px 0 #fff",
        },
      },
    },
  };

  const style = variants[variant];

  return (
    <div className="relative w-[320px] h-[400px]">
      {/* Main Container */}
      <div
        className={`relative w-full h-[240px] bg-red-400 ${style.container}`}
      >
        {/* First cutout */}
        <div
          className={`absolute w-5 h-5 bg-transparent rounded-[50%] ${style.cutouts.first.position}`}
          style={{ boxShadow: style.cutouts.first.shadow }}
        />
      </div>

      {/* Tab */}
      <div className={`absolute h-[80px] w-[50%] bg-white ${style.tab}`}>
        {/* Second cutout */}
        <div
          className={`absolute w-[25px] h-[25px] bg-transparent rounded-[50%] ${style.cutouts.second.position}`}
          style={{ boxShadow: style.cutouts.second.shadow }}
        />
      </div>
    </div>
  );
};

export default CardVariant;
