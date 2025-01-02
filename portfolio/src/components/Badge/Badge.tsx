interface Props {
  skill: string;
}

export default function Badge({ skill }: Props) {
  return <div className="badge badge-primary bg-primary border-0">{skill}</div>;
}
