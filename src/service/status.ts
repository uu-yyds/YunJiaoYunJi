export const showMessage = (status: number): string => {
  const messages: { [key: number]: string } = {
    400: '请求错误(400)',
    401: '未授权，请重新登录(401)',
    403: '拒绝访问(403)',
    404: '请求出错(404)',
    408: '请求超时(408)',
    500: '服务器错误(500)',
    501: '服务未实现(501)',
    502: '网络错误(502)',
    503: '服务不可用(503)',
    504: '网络超时(504)',
    505: 'HTTP版本不受支持(505)',
  };

  const defaultMessage = `连接出错(${status})!`;
  const message = messages[status as number] || defaultMessage;

  return `${message}，请检查网络或联系管理员！`;
};
