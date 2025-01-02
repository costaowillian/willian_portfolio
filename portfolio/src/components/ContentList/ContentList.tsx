type ContentListProps = {
  content: string[];
};

export default function ContentList({ content }: ContentListProps) {
  return (
    <>
      {content.map((item, index) => (
        <p key={index} className="text-sm">
          {item}
        </p>
      ))}
    </>
  );
}
