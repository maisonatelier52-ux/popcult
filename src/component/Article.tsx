import ArticleHeader from './ArticleHeader';
import SocialShare from './SocialShare';
import ArticleImage from './ArticleImage';
import SocialShareList from './SocialShareList';
import ArticleWithDescr from './ArticleWithDescr';
import ShareComponent from './ShareComponent';
import CommentForm from './CommentForm';
import ArticleCard from './ArticleCard';
import prnewsData from '../../public/data/prnews.json';

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  author: Author;
}

interface Props {
  article: NewsItem;
}

export default function Article({ article }: Props) {
  return (
    <div>
      {/* Article Header and Social Share */}
      <ArticleHeader article={article} />
      <SocialShare />
      
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-300 mb-6 md:mb-0">
          <ArticleImage src={article.image} alt={article.title} />
          <div className="flex flex-col md:flex-row mt-8 gap-12">
            
            {/* Social Share List */}
            <div className="hidden md:block sticky top-8 self-start">
              <SocialShareList />
            </div>

            {/* Article Content */}
            <div className="flex-1">
              <ArticleWithDescr data={article} />
            </div>
          </div>

          {/* Share Component and Comment Form */}
          <ShareComponent />
          <CommentForm />
        </div>

        {/* Right Sidebar (Article Cards) */}
        <div className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200">
          <ArticleCard data={[prnewsData[0], prnewsData[1], prnewsData[2], prnewsData[3]]} />
        </div>
      </div>
    </div>
  );
}
