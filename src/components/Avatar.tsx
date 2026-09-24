/** Portrait for the About section. One cutout on a transparent background
 *  serves both themes — the page shows through, so there's nothing to swap
 *  on toggle; only the rim light in globals.css (.avatar-illus) differs. */
export default function Avatar() {
  return (
    <div className="avatar-photo">
      <img
        className="avatar-illus"
        src="/avatar.webp"
        alt="Salil Chandwadkar"
        width={1254}
        height={1254}
      />
    </div>
  );
}
