function SocilePage() {
  return (
    <div className="p-4 bg-stone-300 mb-3">
      <h2 className="text-xl font-bold mb-2">Social pages</h2>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=148&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=271587898352271"
        style={{
          width: "100%",
          height: "145px",
          border: "none",
          overflow: "hidden",
          scrolling: "no",
          frameborder: "0",
          allowfullscreen: "true",
          allow:
            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
        }}
      ></iframe>
    </div>
  );
}

export default SocilePage;
