const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
          dolorem sapiente? Ut, ipsam. Laboriosam recusandae perspiciatis
          asperiores modi alias nisi repellat, omnis aliquid quasi velit, amet
          ipsum vero sed blanditiis itaque labore est!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          animi tenetur inventore rerum eos cum dolore exercitationem, fuga sunt
          error temporibus quos est ea itaque provident, amet eaoutline
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
