import { IIgData } from '../types/types';

interface Props {
  data: IIgData;
}

const heartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

const Instagram: React.FC<Props> = ({ data }) => {
  let render: JSX.Element | JSX.Element[] = (
    <p className="flex justify-center p-6 italic text-gray-500 dark:text-gray-400">
      Error fetching data from Instagram.
    </p>
  );

  if (data) {
    render = (
      <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 w-full gap-4">
        {data?.data?.user?.edge_owner_to_timeline_media?.edges?.map((e, i) => {
          return (
            <div
              key={e.node.id}
              className={`${
                i === 0 ? 'xl:row-span-2 xl:col-span-2' : null
              } flex flex-col relative border rounded border-gray-600 shadow hover:shadow-lg transition`}
            >
              <a
                href={`https://www.instagram.com/p/${e.node.shortcode}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={e.node.thumbnail_src}
                  alt={e.node.edge_media_to_caption.edges[0].node.text}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{
                    backgroundImage: `url(${e.node.thumbnail_src})`,
                  }}
                ></div>
                <div className="absolute flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition inset-0 z-10 text-white text-6xl">
                  <span className="">
                    {heartIcon}
                    <span>{e.node.edge_media_preview_like.count}</span>
                  </span>
                  <div className="absolute min-h-full bg-black opacity-25 left-0 right-0 -z-1"></div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <p className="text-4xl my-4">Instagram</p>
      {render}
    </>
  );
};

export default Instagram;
