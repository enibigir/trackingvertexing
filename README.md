# CMS Data Analysis School Tracking and Vertexing Short Exercise

This repository generates the corresponding lesson website from [The Carpentries](https://carpentries.org/) repertoire of lessons. 

## Contributing

We welcome all contributions to improve the lesson! Maintainers will do their best to help you if you have any
questions, concerns, or experience any difficulties along the way.

We'd like to ask you to familiarize yourself with our [Contribution Guide](CONTRIBUTING.md) and have a look at
the [more detailed guidelines][lesson-example] on proper formatting, ways to render the lesson locally, and even
how to write new episodes.

Please see the current list of [issues](https://github.com/CMSTrackingPOG/trackingvertexing/issues) for ideas for contributing to this
repository. For making your contribution, we use the GitHub flow, which is
nicely explained in the chapter [Contributing to a Project](http://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project) in Pro Git
by Scott Chacon.
Look for the tag ![good_first_issue](https://img.shields.io/badge/-good%20first%20issue-gold.svg). This indicates that the maintainers will welcome a pull request fixing this issue.  

## Building the site locally

There are some recommendations here for creating new lessons
[Carpentries: 10 things to know](https://carpentries.github.io/lesson-example/#ten-things-you-need-to-know)

The site can be built on a local machine after cloning the repo with:
```
make serve
```

if the build is successful, the server address (something like http://127.0.0.1:4000) will appear at the end of the print out.

May need to install software on the build machine (my version of Ruby needed to be updated).

Note: the gitignore file already keeps the build file from being committed - but we should be careful to keep that true in the future.


## Maintainer(s)

Current maintainer of this lesson is:

* [Marco Musich](mailto:marco.musich@cern.ch)


## Authors

A list of contributors to the lesson can be found in [AUTHORS](AUTHORS)

## Citation

To cite this lesson, please consult with [CITATION](CITATION)

[trackingvertexing]: https://CMSTrackingPOG.github.io/trackingvertexing
