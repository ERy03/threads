interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  userName: string;
  imgUrl: string;
  bio: string;
}

export default function ProfileHeader({
  accountId,
  authUserId,
  name,
  userName,
  imgUrl,
  bio,
}: Props) {
  return (
    <div>
      <h1 className="text-light-1">Profile Header</h1>
    </div>
  );
}
