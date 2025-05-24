if exists('g:loaded_denops_skeleton')
  finish
endif
let g:loaded_denops_skeleton = 1

command! DenopsSkeletonHello call denops#request('denops_skeleton', 'hello', [])
