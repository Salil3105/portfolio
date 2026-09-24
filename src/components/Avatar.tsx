/** Portrait for the About section. Two separate photos, each shot against a
 *  backdrop matching its own theme's page background (see the .avatar-illus
 *  comment in globals.css for why that matters) — CSS cross-fades between
 *  them on theme toggle, so there's no client component or hydration risk
 *  here at all. */
export default function Avatar() {
  return (
    <div className="avatar-photo">
      <img
        className="avatar-illus avatar-illus-dark"
        src="/avatar.png"
        alt="Salil Chandwadkar"
        width={1100}
        height={1100}
      />
      <img
        className="avatar-illus avatar-illus-light"
        src="/avatar-light.webp"
        alt="Salil Chandwadkar"
        width={1254}
        height={1254}
      />
    </div>
  );
}
