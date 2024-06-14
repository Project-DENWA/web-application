'use client';
import css from './ResumesContent.module.scss';

import ResumesFilter from '../ResumesFilter/ResumesFilter';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';
import { useGetAllResumesQuery } from '@/shared/redux/features/resumeApi';
import PageLoader from '../../../_components/PageLoader/PageLoader';
import dynamic from 'next/dynamic';
import TasksCardSkeleton from '../../../orders/_components/TasksCard/skeleton';

export default function ResumesContent(): JSX.Element {
  const ResumesCard = dynamic(() => import('../ResumesCard/ResumesCard'), {
    loading: () => <TasksCardSkeleton />,
    ssr: false,
  });

  const { data: resumesData, isLoading } = useGetAllResumesQuery();
  const resumes = resumesData?.result;

  return (
    <div className={css.wrapper}>
      <ResumesFilter />
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className={css.cards}>
          {resumes?.map((resumeItem, index) => (
            <ResumesCard
              key={index}
              avatarUrl={resumeItem.user.avatar.icon}
              fullname={resumeItem.user.fullname}
              description={resumeItem.description}
              verified={resumeItem.verified}
              rating={resumeItem.rating}
              category={resumeItem.categories}
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
      )}
    </div>
  );
}
