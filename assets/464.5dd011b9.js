const a=[.11,.1,.21,.09,.21,.37,.24,.56,.25,.16,0,.05,-.16,-.3,-.1,.11,.06,-.01,-.24,.26,-.2,-.77,.13,-.28,.1,.3,-.81,.19,.19,-.84,.49,-.68,.31,.46,-.1,.22,.08,-.17,.23,.23,-.05,.34,.28,-.01,.1,-.21,-.14,-.13,-.6,.53,-.02,.22,-.09,.18,.73,-.02,.06,.67,.01,.33,.88,.37,.44,.07,-.23,-.71,.41,-.28,-.19,-.01,-.03,.04,.79,-.32,.24,.04,-.24,.91,-.02,-.37,-.22,.29,-.03,.35,-.19,-.65,.3,.03,-.35,.1,.55,.03,.5,-.06,-.03,.13,-.31,-.13,-.01,.92,-.01,.43,.57,.11,.64,-.04,-.31,-.42,.27,.54,.06,.6,.1,-.14,-.24,.07,-.01,-.68,-.26,.27,-.02,-.37,.18,.06,.09,.54,.21,0,-.43,.1,.52,0,.04,.54,-.07,0,.65,.32,-.75,.23,.47,.35,.53,.32,.36,.03,.01,.25,.57,-.02,.45,.43,.06,.1,.53,.55,-.2,.06,-.09,-.13,.49,.58,.01,.57,.51,.93,.31,-.68,.35,.35,.3,-.52,.49,.31,.32,-.68,.09,-.79,.88,.25,-.11,.17,.14,-.05,.69,.05,.01,.18,.52,-.01,-.01,.7,-.08,.7,.69,.2,.61,.27,.05,-.49,-.02,.55,.13,.03,-.22,.57,-.04,.66,.76,-.04,.49,-.12,-.09,.04,.64,.52,.11,.48,-.66,-.6,.45,.54,.45,.22,.33,.15,.62,-.66,.53,.43,.04,.06,-.08,.18,-.26,.34,-.14,-.3,.27,-.07,.74,-.2,.42,.63,.47,.26,.02,.25,.03,.03,.58,-.35,.72,.3,.43,-.12,-.07,.51,.26,.01,-.07,.36,.54,.45,.34,.63,-.31,.35,.06,.41,-.33,.08,.15,.2,.14,.04,-.71,.88,.31,-.6,.8,-.75,.01,-.19,.52,.29,-.68,.06,.52,-.59,.32,.69,.25,.22,.37,.31,-.04,-.11,.22,.34,.11,.11,-.54,-.06,.28,.13,-.26,.69,.52,-.16,.41,.02,-.25,.31,.11,.35,.31,.45,.22,.29,.39,-.05,-.17,.36,.32,.55,.28,-.03,-.04,.55,-.27,.38,.26,-.06,-.72,-.12,-.59,.48,-.08,-.51,.69,.23,-.12,-.1,.02,.27,.05,.83,.19,.51,.6,.58,.32,.54,-.27,-.01,.46,-.3,.42,.08,.26,.11,.48,-.47,-.02,-.06,.38,.14,.7,.01,-.55,-.08,.18,.34,.85,.51,-.05,.34,-.02,.62,0,.08,-.09,.05,.05,.34,-.2,-.03,.3,.28,.38,-.16,.1,.06,-.04,.11,-.71,-.08,.05,.04,-.26,.42,.35,.3,.66,-.02,-.12,.4,.51,.31,.17,-.27,.2,.38,.37,.03,.45,.01,.81,-.26,.33,.05,-.42,-.14,.13,.11,.11,-.05,.5,.27,.37,.29,.27,.19,.57,.13,-.1,.27,.21,.69,.6,.44,.52,.04,.34,.53,.12,.3,.19,-.48,.31,.63,-.37,.29,-.05,.25,-.76,.15,.63,.34,.28,.36,-.19,1,-.08,.1,-.08,-.16,-.31,.13,-.4,.1,.3,.06,.62,.23,.3,.32,.2,-.77,.59,-.02,.31,.47,.45,.3,.45,.14,.01,.18,-.02,.03,-.17,.06,.34,.18,.3,-.18,.31,.54,.59,.16,.42,.23,.44,.13,.27,.32,.05,.82,.61,.35,.46,.23,.36,-.39,.59,.49,.95,.29,-.25,.2,.11,.04,.5,.25,-.11,.32,.08,.38,.7,.28,.02,.41,.31,.52,.45,-.03,.31,-.03,-.22,.46,-.29,-.75,-.25,-.01,.47,-.76,.32,.17,-.65,.14,.22,.15,.43,-.24,-.39,.29,-.24,0,.12,-.54,.24,.46,-.02,-.07,.12,-.2,.63,-.22,.31,.17,.14,.11,.31,.12,-.12,-.46,.65,.04,-.28,.2,.59,.42,.67,-.12,.13,.6,-.45,.03,-.07,-.05,-.11,.52,.41,-.15,.32,.14,.67,.24,.29,.27,.22,.55,.07,-.78,.6,-.31,.01,.14,0,-.01,.04,.72,-.08,.02,.14,.29,-.22,.2,.29,.12,.4,.05,.44,-.09,.22,.46,.55,.17,-.2,-.49,-.3,.85,.07,.55,.24,.6,.38,-.68,.4,.41,-.61,.14,-.01,.45,.32,.32,-.23,.66,0,-.36,.37,.19,.23,.18,-.23,-.14,-.07,.03,.12,.28,.21,.53,0,.22,-.09,.39,.41,.37,.26,-.03,-.11,-.86,.56,.44,.61,.22,-.11,.21,.03,.28,.21,.33,.65,.35,-.28,.34,.34,.37,.06,-.07,.27,-.25,.39,-.04,.3,.36,.33,-.2,.36,.47,.55,.18,.12,-.1,-.04,.05,.17,-.81,.42,.45,.32,.34,.12,.04,.07,.14,-.18,-.01,.48,.44,.06,-.17,.26,-.11,-.2,-.57,-.04,.27,-.32,.42,.29,-.18,.55,.64,.02,-.01,.07,0,-.1,.21,-.61,-.8,-.07,-.03,.24,-.05,.24,.75,.06,-.45,-.24,.39,.13,.05,-.26,-.4,.31,-.08,.15,-.77,.21,.24,-.36,-.04,.39,-.17,-.36,.38,.42,.54,.27,.3,.62,-.11,.36,.42,.2,.58,.22,-.34,.01,.4,.22,.59,.7,.92,.03,-.53,-.67,.31,.52,-.28,.27,-.64,.14,.54,.1,.69,.03,.19,-.42,.5,.13,.3,.36,-.16,.49,-.12,.01,.07,.29,-.45,.39,.53,-.37,-.62,.02,.18,-.03,.25,.42,.04,-.09,.14,-.19,.33,-.14,.04,.23,.12,.51,.01,.09,-.36,-.16,.33,.29,-.67,.53,.29,-.12,.58,-.37,.37,-.38,-.63,.62,-.12,.01,-.66,.41,-.18,-.1,.2,.53,.41,.56,-.36,.68,.2,-.23,-.24,.35,.42,-.43,.29,.37,.38,.16,.15,.01,.62,.59,.52,.09,.26,-.18,.43,-.78,.23,.03,.44,-.02,.25,.75,.08,.44,.23,.38,-.16,-.32,.75,.33,-.12,-.17,-.17,.33,.22,.29,-.22,-.06,-.02,.24,.19,.12,.65,.11,.6,.35,-.8,-.34,.18,.55,.4,.22,.5,.45,-.09,.58,-.33,-.09,.21,.42,.22,.33,.15,.3,.45,.7,.08,0,.34,.35,-.27,.86,-.08,.5,.32,-.05,-.11,.26,.33,.32,.2,.4,.26,-.13,-.11,.39,.08,.26,-.27,.43,.03,.39,.18,.36,.24,.24,-.08,.19,.03,.52,.09,.11,.21,-.38,-.06,-.53,.24,-.26,-.3,.31,-.06,.11,.4,.8,.41,.28,.47,-.7,.47,.38,.35,.34,.16,.19,.57,.54,.35,.69,.28,-.07,.66,-.04,.07,.16,-.05,.1,.06,.02,.2,.12,-.25,.01,.2,-.13,.07,-.25,.71,.47,-.63,.35,-.01,.38,.21,.35,-.09,.41,.06,.3,.68,-.11,.34,.44,-.02,.2,-.09,.48,-.13,.06,.48,.07,.66,.06,.44,.05,.05,.26,.13,-.69,.05,.03,.62,.07,-.08,-.34,.27,.52,.31,.23,.3,.03,-.1,-.25,.22,.56,.22,-.7,.09,.03,.04,.78,.42,-.62,.21,.09,.08,.64,.75,.74,.13,-.13,.27,.04,.38,.59,.27,.33,-.6,.04,.04,.9,-.43,.16,-.16,-.76,.39,-.14,.3,.32,-.55,.15,.55,.41,.3,.35,.26,.33,-.45,.57,.24,.21,.32,.1,-.03,.33,-.03,-.34,.74,.89,-.13,-.39,-.49,-.05,.04,.62,.21,-.11,-.2,-.12,.08,-.3,.18,-.05,-.23,.52,-.19,.44,.32,.15,-.2,.17,.22,.32,.44,.37,.26,.21,-.1,-.06,.36,.49,.36,.09,-.21,.31,-.19,.21,-.02,.85,.29,-.08,.54,.32,.46,.33,.28,.21,.4,.17,.7,.2,.24,.24,.26,.44,.55,.37,.13,-.41,.5,.63,-.11,-.07,.09,.35,-.09,.56,-.07,-.01,.26,-.22,.33,.1,-.02,-.2,.14,.06,.29,.06,-.16,.35,.07,-.18,.47,.54,-.18,-.26,.61,.18,.36,.41,.61,.27,.19,.2,.61,.27,.02,-.25,.28,.14,.54,-.01,.35,.2,.51,.23,.43,.38,.36,.37,.53,-.01,-.8,.52,.47,-.77,.09,.43,-.01,.21,.38,.21,.06,.08,.35,0,.27,.23,.03,.36,.01,.04,.02,.35,.32,.4,.05,.3,.51,.16,.15,.51,-.44,.43,.51,-.31,.17,.22,.32,-.61,.52,-.8,-.75,.67,.13,.11,-.08,.51,-.22,.22,.28,.07,-.05,.39,-.04,.62,.32,.14,.55,.07,.31,.16,-.1,.01,.25,-.02,.38,.52,.72,.25,.6,-.24,.45,.26,.64,.22,.59,.21,.11,-.04,-.27,.94,.48,.17,-.38,.5,.16,-.18,.44,.12,.16,.62,.39,.07,.35,.41,.23,-.19,.11,.45,.28,.11,.44,.35,-.73,-.23,.37,.3,.27,.13,.14,.44,-.02,-.01,.59,.36,-.15,-.11,-.25,.11,.15,-.17,.74,-.01,-.09,.83,.53,.49,.33,.13,.53,.56,.72,.39,.56,.45,.46,-.18,.06,.07,.27,.54,.6,-.03,-.3,-.37,.16,.37,.04,.3,-.13,.03,.07,.3,-.04,-.19,.11,.13,-.16,.28,.17,-.29,-.03,.78,.49,.45,.41,.56,.77,.11,-.11,.64,.16,.17,-.17,.61,-.12,-.26,.21,.32,-.24,.18,.78,-.53,.17,.49,.32,.43,.3,.26,-.04,.21,-.21,.39,-.01,-.11,.22,.01,.62,-.13,.05,.07,-.09,-.22,.05,-.02,.35,.43,.57,.39,.33,.16,.06,.79,-.03,.61,-.27,.27,.37,.28,.39,.02,-.02,.01,.18,-.05,.06,-.04,.26,.28,.31,.27,.59,-.36,-.05,-.04,.38,.19,-.4,.7,.48,.36,.13,.08,.27,.8,-.18,-.02,-.69,.54,-.05,.65,.39,.71,-.05,.42,.25,0,.29,.35,.25,.68,-.09,.02,.74,.28,.44,.44,.22,.24,.38,.06,-.01,.05,.36,-.1,.32,.27,.78,-.27,.55,.16,.39,.27,.13,.22,0,-.14,.64,.01,-.03,.39,.09,.36,-.08,.53,.6,.41,.4,-.19,.16,.38,.22,.07,-.57,.38,.51,.52,.16,.58,-.08,.51,.3,.73,.19,.34,.74,.31,.6,.48,.17,.27,.63,.37,-.14,.34,.02,.54,.42,.27,.53,.4,-.08,.42,.32,.04,-.26,.32,.5,.5,.62,.26,.41,-.26,-.07,.32,.23,.24,.41,.37,.27,.57,-.6,.7,-.21,.36,.09,.42,.39,.53,.59,.59,-.09,.29,.21,.44,-.35,-.42,.56,.23,.5,-.03,.59,.12,.1,-.29,.32,.21,.56,.11,.25,-.07,-.24,.09,.48,.56,.22,-.04,.06,.42,.33,.83,.52,.48,.53,.13,.45,-.14,.75,-.01,.32,-.17,.06,-.04,.29,.12,.1,.36,.23,.61,-.12,.44,.48,.38,.48,.4,.37,.36,.19,.38,.58,.21,.05,-.01,.43,.51,.44,.3,.24,.35,-.29,.5,.69,.56,.44,-.02,.14,.14,.48,.36,.39,.05,.6,.66,.58,-.02,.72,-.01,.2,.51,-.25,.53,-.21,.23,.59,-.1,.42,-.19,.48,-.01,.6,.2,.02,.45,.42,-.2,.41,.4,-.18,0,.4,.24,-.21,.54,.45,-.18,-.01,.29,.33,.16,-.25,.18,.28,.37,-.14,-.25,-.01,.46,.35,.34,.16,.22,-.15,-.21,.14,.49,-.44,.37,-.42,.41,.33,.36,.01,-.35,-.04,-.17,.34,.43,.18,.6,.38,.36,.52,.56,.3,.32,.15,.05,-.02,.41,-.18,.15,.3,.26,.26,-.03,.57,.27,.46,-.81,0,-.03,.14,-.18,0,.37,-.39,-.29,.26,-.08,.11,-.04,.05,.59,.51,-.03,.14,.08,.12,.16,.16,-.85,-.57,-.11,.36,.13,.27,.22,-.32,.34,.35,.49,.67,.37,.38,.44,.23,.31,.84,.68,.49,-.36,.56,.28,.44,.52,-.7,-.39,.18,.33,.22,.78,.11,.43,.11,.55,.21,.09,.05,.44,-.07,.52,0,-.22,.39,.5,.08,.59,.28,.13,.6,.42,.48,.23,.56,.2,.01,.17,.05,.2,.36,.35,.06,.36,.32,.14,.28,-.13,.1,-.07,.5,-.32,-.08,-.2,-.01,.08,.01,.55,.21,.51,.2,.43,.11,.3,-.01,-.04,.39,-.09,.63,.6,.75,.09,.03,.26,.14,.32,-.25,.17,.36,.75,.77,-.09,-.06,.23,.39,.21,-.03,-.24,0,.54,.47,.44,.32,-.13,-.46,.53,.71,.29,.36,-.07,.05,.34,.08,.01,.3,.36,.07,.48,.1,.35,.33,-.71,.5,.52,.82,.49,-.01,-.42,.24,-.11,.1,-.05,.16,-.12,-.16,.4,.71,-.12,.62,.24,.11,.03,.43,-.33,-.1,.53,-.08,.15,0,-.03,.17,.27,-.05,.56,.27,.1,.22,.21,-.36,.14,0,.17,.36,.28,.03,.39,.56,.32,.4,-.13,.24,.04,.21,.27,.4,.2,.15,-.32,.12,.08,-.28,.43,.25,-.02,-.5,.01,-.32,-.04,.4,.19,.28,.2,.78,-.06,.56,.06,-.44,.03,-.21,-.2,.33,.07,.48,-.12,-.38,.51,-.07,.05,.35,.49,.28,.51,.07,.41,-.3,.34,.44,.18,.03,.52,.3,.44,.17,.45,.33,.15,.33,.28,.14,.32,-.04,-.25,.15,-.25,.61,-.19,.15,.29,.25,.14,.27,.25,.59,-.13,.17,-.28,.13,.37,.08,.06,-.03,.59,.25,.25,.45,-.37,-.05,-.58,.58,.26,.53,.26,.25,.4,.1,-.84,.13,-.32,-.35,.16,.24,-.13,.25,.19,.39,-.05,.67];export{a as rvalData};
