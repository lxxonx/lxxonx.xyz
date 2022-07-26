import { PostType } from '@/types/mdx';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import Tag from './Tag';

type Props = {
  post: PostType;
};

function PostItem({ post }: Props): JSX.Element {
  return (
    <article
      key={post.slug}
      className="mt-10 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:items-center"
    >
      {post.cover && (
        <Link as={`/${post.kind}s/${post.slug}`} href={`/${post.kind}s/[slug]`}>
          <a>
            <Image
              priority={true}
              src={post.cover}
              alt={post.title}
              width={300}
              height={150}
              layout="intrinsic"
              objectFit="cover"
              objectPosition={'top'}
            ></Image>
          </a>
        </Link>
      )}
      <div>
        <dl className="flex">
          <dt className="sr-only">Published on</dt>
          <dd className="border-r border-gray-500 dark:border-gray-400 pr-2 text-xs text-gray-500 dark:text-gray-400 ">
            <time dateTime={post.date}>
              {dayjs(post.date).format('YYYY년 MM월 DD일')}
            </time>
          </dd>
          <dt className="sr-only">Reading Time</dt>
          <dd className="ml-2 text-xs text-gray-500 dark:text-gray-400">
            {post.readingTime}
          </dd>
        </dl>
        <div className="space-y-1 xl:col-span-3">
          <div>
            <h3 className="text-2xl font-extrabold leading-relaxed tracking-tight mb-1">
              <Link
                as={`/${post.kind}s/${post.slug}`}
                href={`/${post.kind}s/[slug]`}
              >
                <a className="text-gray-800 dark:text-gray-200">{post.title}</a>
              </Link>
            </h3>
            <div className="flex flex-wrap space-x-1">
              {post.tags &&
                post.tags.map((tag: string) => (
                  <Tag text={tag} key={tag} type={`${post.kind}s`} />
                ))}
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {post.summary}
          </div>
          <p>
            <Link
              as={`/${post.kind}s/${post.slug}`}
              href={`/${post.kind}s/[slug]`}
            >
              <a className="font-pixel-sm text-gray-800 dark:text-gray-200 text-sm">
                read more
              </a>
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
