type Props = {
  title: string;
  content: string;
  icon: JSX.Element;
};

export default function Card({ title, content, icon }: Props) {
  return (
    <div className="mt-5 rounded-md border-2 border-yellow-400 py-16 px-5 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{content}</p>
    </div>
  );
}
