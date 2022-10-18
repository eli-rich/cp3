export interface FileError extends Error {
  errno: number;
  code: string;
  path: string;
  syscall: string;
}
