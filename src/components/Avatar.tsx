/** Portrait for the About section. The render's background is cut out in the
 *  file itself, so it composites straight onto the animated page backdrop. */
export default function Avatar() {
  return (
    <div className="avatar-photo">
      <img
        className="avatar-illus"
        src="/avatar.png"
        alt="Salil Chandwadkar"
        width={1100}
        height={1100}
      />
    </div>
  );
}
