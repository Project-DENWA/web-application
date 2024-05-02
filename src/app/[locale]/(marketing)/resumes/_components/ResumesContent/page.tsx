import css from './ResumesContent.module.scss';

import ResumesFilter from '../ResumesFilter/ResumesFilter';
import ResumesCard from '../ResumesCard/ResumesCard';
import { resumeItems } from '../../resumesItems';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/shared/ui/pagination';

export default function ResumesContent(): JSX.Element {
  return (
    <div className={css.wrapper}>
      <ResumesFilter />
      <div className={css.cards}>
        {resumeItems.map((resumeItem, index) => (
          <ResumesCard
            key={index}
            avatarUrl={resumeItem.avatarUrl}
            fullname={resumeItem.fullname}
            description={resumeItem.description}
            experience={resumeItem.experience}
            rating={resumeItem.rating}
            category={resumeItem.category}
          />
        ))}
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
