/*
Hi, here's your problem today. This problem was recently asked by Google:

You are given a hash table where the key is a course code,
and the value is a list of all the course codes that are prerequisites for the key.
Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.

Example:
{
  'CSC300': ['CSC100', 'CSC200'], 
  'CSC200': ['CSC100'], 
  'CSC100': []
}

This input should return the order that we need to take these courses:
 ['CSC100', 'CSC200', 'CSC300']
*/

export function getCoursePrerequisite(courseMap: Record<string, string[]>): string[] {
  const completedCourses: Set<string> = new Set();

  const checkCanCompleteCourse = (course: string, currentPrerequisites: Set<string> = new Set()): boolean => {
    // Detect cyclic dependencies
    if (currentPrerequisites.has(course)) {
      return false;
    }

    // Course does not exist
    if (!courseMap[course]) {
      return false;
    }

    // Already completed course
    if (completedCourses.has(course)) {
      return true;
    }

    // Zero dependency
    if (courseMap[course].length === 0) {
      completedCourses.add(course);
      return true;
    }

    // Loop through all prerequisites
    for (const prerequisite of courseMap[course]) {
      if (!completedCourses.has(prerequisite)) {
        const canCompleteCourse = checkCanCompleteCourse(prerequisite, currentPrerequisites.add(course));

        if (canCompleteCourse) {
          completedCourses.add(prerequisite);
        } else {
          return false;
        }
      }
    }

    completedCourses.add(course);
    return true;
  };

  for (const courseKey in courseMap) {
    if (!checkCanCompleteCourse(courseKey)) {
      return null;
    }
  }

  return Array.from(completedCourses);
}
