

export interface Manifest {
  [version: string]: {
    dependencies?: { [dep: string]: string }
    dist: { shasum: string, tarball: string }
  }
}
