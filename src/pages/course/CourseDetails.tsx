import React from 'react';
import { useParams } from 'react-router-dom';

// <---------------------- import types ------------------------>
import type { RouteParams } from 'types/routes.type';

const CourseDetails: React.FC = () => {

// <------------------ defined initial variables ---------------->
    const { courseId } = useParams<RouteParams>();

  return (
    <div className={``}>
        <h1 className={``}>{courseId}</h1>
    </div>
  )
}

export default CourseDetails