/*
This problem was asked by Airbnb.

We're given a hashmap associating each courseId key with a list of courseIds values,
which represents that the prerequisites of courseId are courseIds.
Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []},
should return ['CSC100', 'CSC200', 'CSCS300'].
*/

export function checkCoursePrerequisite(
  courseMap: Record<string, string[]>,
): string[] {
  const completedCourses: Set<string> = new Set()

  const checkCanCompleteCourse = (
    course: string,
    currentPrerequisites: Set<string> = new Set(),
  ): boolean => {
    // Detect cyclic dependencies
    if (currentPrerequisites.has(course)) {
      return false
    }

    // Course does not exist
    if (!courseMap[course]) {
      return false
    }

    // Already completed course
    if (completedCourses.has(course)) {
      return true
    }

    // Zero dependency
    if (courseMap[course].length === 0) {
      completedCourses.add(course)
      return true
    }

    // Loop through all prerequisites
    for (const prerequisite of courseMap[course]) {
      if (!completedCourses.has(prerequisite)) {
        const canCompleteCourse = checkCanCompleteCourse(
          prerequisite,
          currentPrerequisites.add(course),
        )

        if (canCompleteCourse) {
          completedCourses.add(prerequisite)
        } else {
          return false
        }
      }
    }

    completedCourses.add(course)
    return true
  }

  for (const courseKey in courseMap) {
    if (!checkCanCompleteCourse(courseKey)) {
      return null
    }
  }

  return Array.from(completedCourses)
}
