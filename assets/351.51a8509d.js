const a=[-.32,.34,.68,-.05,.74,.23,.32,.23,.37,.19,.31,-.02,-.03,-.75,.45,-.03,.19,0,-.26,.03,-.06,-.49,.2,.19,.53,.84,-.53,.15,.44,-.51,.65,-.45,.75,.17,.03,.27,.63,.32,.37,.58,-.04,.8,.54,-.1,.16,.15,-.06,-.15,-.24,.53,.22,0,.14,.77,.72,.32,.37,.28,.33,.7,.63,.77,.92,-.08,.09,-.53,.86,.28,-.11,-.09,-.03,.37,.67,-.31,.74,-.01,-.21,.59,.42,-.28,-.49,.6,-.08,.79,-.23,-.43,.76,.07,-.72,.54,.36,.11,.5,-.6,-.03,.17,-.76,-.27,-.11,.7,-.12,.89,.71,-.12,.84,.09,-.14,-.09,.79,.78,.02,.55,.1,-.61,-.14,.63,.12,-.53,-.26,.59,-.06,-.3,.27,-.07,.15,.77,.67,-.14,-.5,.66,.25,-.25,-.09,.4,.2,-.05,.35,.4,-.53,-.05,.89,.1,.82,.75,.08,-.03,.07,.09,.86,-.18,.88,.17,.08,.01,.25,.31,-.03,-.06,-.29,.38,.22,.88,.06,.45,.51,.56,.45,-.58,.26,.79,.05,-.43,.23,-.09,.74,-.39,.06,-.37,.58,.73,-.05,.13,.08,.48,.8,.11,.05,.12,.33,-.25,-.12,.42,.05,.86,.9,.73,.89,.36,-.04,-.43,.22,.7,.7,.01,-.45,.73,.06,.65,.62,-.04,.2,.39,-.14,.55,.26,.5,.04,.3,-.44,-.39,.76,.68,.54,.79,.66,.71,.31,-.48,.46,.3,-.01,-.05,.4,.64,.08,.11,.31,-.03,.1,.05,.53,.37,.15,.21,.4,-.01,.11,.22,.13,-.08,.27,-.26,.71,.27,.87,-.06,.17,.5,.18,.51,.05,.2,.59,.87,.19,.79,-.3,.79,.03,.57,-.19,-.41,.66,.68,.66,-.01,-.29,.57,.77,-.24,.49,-.45,.33,-.48,.55,.69,-.34,.6,.37,-.26,.09,.56,.78,-.01,.34,.57,.11,-.36,.18,.55,.08,.65,-.43,-.15,.13,.46,.08,.81,.35,.08,.74,-.06,-.16,.06,.3,.55,.38,.3,.67,.41,.81,-.11,.32,.88,.21,.57,.81,-.11,.16,.59,-.62,.68,.34,.02,-.53,-.07,-.47,.67,-.14,-.29,.75,.52,-.17,-.11,.63,.73,.11,.57,.48,.41,1,.03,.19,.55,-.55,.36,.43,-.11,.77,.55,.43,.2,.48,-.13,-.04,-.52,.21,.71,.47,.05,-.07,-.27,.31,.2,.47,.4,.12,.8,-.09,.48,.05,.11,.06,.15,.01,.49,-.22,-.02,.78,.8,.78,-.04,.09,.07,-.01,.68,-.64,-.12,-.07,.15,-.24,.3,.73,.59,.41,.07,.33,.77,.87,.74,.66,-.57,-.16,.79,.21,.01,.88,.59,.5,-.35,.18,.66,-.3,0,.27,.72,.67,-.01,.49,-.16,.11,.16,.56,.15,.37,.65,-.27,.86,.78,.8,.87,.71,.79,-.04,.36,.62,.66,.82,.07,-.65,.39,.69,-.83,.23,-.12,.14,-.39,.71,.29,.57,.75,.85,-.64,.6,.06,.2,-.33,-.15,-.64,.75,-.05,.66,.47,-.02,.49,.79,.65,.22,.72,-.49,.9,.51,.71,.54,.33,.29,.64,-.1,.36,.56,.05,-.03,-.04,-.11,.74,.75,.24,-.18,.6,.15,.48,.01,.74,.58,.79,-.07,.14,.78,.67,.57,.89,.2,.78,.27,.34,-.29,.25,.37,.56,.78,-.22,.73,.17,-.01,.56,.01,.24,.26,.14,.74,.51,.24,-.11,.16,.04,.23,.5,.36,.03,.1,.06,.37,-.16,-.24,-.3,-.21,.24,-.22,.67,.16,-.38,.71,.75,.58,.7,-.17,-.52,.03,-.4,-.08,.64,-.34,.39,.2,-.11,-.13,-.04,-.1,.32,-.15,.68,.66,.15,-.24,.74,.68,-.17,-.5,.46,.22,-.33,.15,.92,.38,.82,.42,.69,.77,-.34,.6,-.13,.09,.03,.77,.21,-.67,.77,.65,.54,.24,.59,.75,.69,.39,.51,-.54,.32,-.25,.11,.11,.13,.55,.16,.41,-.07,-.05,.7,0,-.15,.04,.19,.02,.49,-.08,.35,-.25,.2,.31,.9,-.07,-.1,-.58,-.38,.53,.43,.61,.78,.22,.06,-.42,.27,.77,-.59,.09,.2,.85,.03,.85,.13,.81,-.14,-.82,.31,.76,.78,.15,.26,-.2,-.17,-.02,.67,.59,.74,.34,.19,.13,.03,.38,.76,.72,.57,-.01,-.16,-.52,.62,-.01,.88,.74,-.42,.2,-.03,.03,.48,.78,.28,.32,-.5,.82,.87,.05,-.09,-.22,.14,-.16,.04,-.08,.29,.24,.65,-.54,.79,.28,.64,.57,.1,-.15,-.19,.46,0,-.46,.87,.1,.3,.26,-.07,-.16,.18,.16,-.24,-.11,.27,.82,.6,-.06,.67,.44,-.35,-.52,-.29,.7,-.64,.39,.8,-.04,.66,.35,.6,-.09,.11,.01,.37,.56,-.44,-.31,-.07,-.35,.51,.57,.19,.73,-.15,-.07,-.23,.41,.63,.18,.01,.04,.7,-.09,.28,-.58,.79,.39,.12,.55,.81,-.11,-.27,.22,.12,.38,.72,.09,.51,-.4,.46,.17,.72,.45,.72,-.15,-.03,.84,.63,.86,.7,.5,.14,-.37,-.54,.24,.8,.21,.84,-.55,.73,.79,-.3,.68,.05,.31,-.51,.88,.5,.71,.39,-.35,.34,-.06,.05,-.12,.79,-.4,.71,.27,-.65,-.38,-.01,.74,-.1,.23,.18,.6,-.05,.69,-.17,.34,-.23,-.08,.12,.68,.32,-.14,-.02,-.2,-.16,.34,.24,-.49,.7,.7,-.02,.23,-.36,.79,-.02,-.42,.74,-.08,-.05,-.44,.64,-.09,-.05,.35,.33,.27,.48,-.14,.86,.76,-.01,-.33,.09,.14,-.5,.18,.23,.07,-.14,.09,0,.51,.25,.32,.26,.33,-.16,.17,-.47,.58,.1,.86,.52,.1,.48,.43,.85,.04,.85,-.48,-.56,.71,.72,-.06,-.46,-.22,.51,.72,.45,-.23,.05,-.12,-.02,.65,.1,.43,.03,.35,-.01,-.31,-.31,-.13,.77,.46,.1,.22,.11,-.05,.24,-.16,-.31,.48,.86,.72,.09,.69,.72,.33,.41,.59,.55,.8,.71,-.73,.61,-.09,.64,.8,-.13,.23,.28,.64,.15,.15,.18,.68,.02,-.01,.14,.03,.29,.02,.32,.12,.86,.11,.79,.26,.78,.13,.01,.01,.8,.07,.04,.21,-.61,-.17,-.25,-.04,.24,-.71,.8,-.08,.21,.46,.53,.78,.82,.18,-.61,.32,.32,.16,-.11,.1,.05,.54,.64,.06,.51,.03,-.14,.49,-.06,.04,.13,.16,-.04,-.03,.06,-.04,.05,-.11,-.17,.1,-.2,-.02,-.24,.74,.48,-.3,.28,-.18,.46,-.19,.03,.06,.77,.08,.37,.7,.09,.39,.85,-.01,.15,-.15,.22,-.05,.26,.55,.07,.75,.62,.15,.29,-.03,.14,.7,-.38,-.14,-.05,.49,.03,-.22,-.27,.54,.36,.63,.3,.29,.29,-.15,-.31,.12,.29,.77,-.35,-.06,.06,.55,.42,.52,-.55,.44,.56,-.08,.49,.44,.58,.63,.01,.58,.61,.17,.7,.78,.11,-.32,0,.01,.58,-.12,.11,-.25,-.47,.76,.09,-.19,.77,-.35,.51,.92,.18,.36,.88,.79,0,-.4,.01,.37,.69,.52,.47,.13,.78,.08,-.2,.63,.63,-.02,-.31,-.3,-.2,.53,.47,.78,-.25,.39,-.28,.12,-.34,.04,-.04,.3,.29,-.12,.14,.82,.74,-.24,.12,.71,.88,.22,.15,.01,.81,-.1,-.06,.41,.88,.07,.69,.18,.65,-.26,.13,-.18,.49,.78,.1,.46,.05,.32,.17,.01,.52,.54,-.1,.47,.73,.34,.8,.73,.84,.61,.24,.05,-.7,.55,.83,.09,.55,.08,.55,-.05,.19,-.15,.04,.03,-.38,.14,.72,.58,-.07,.6,.16,.02,-.27,.13,.84,-.03,-.23,.88,.89,-.43,-.32,.73,-.02,.86,.52,.93,.08,.64,.49,.32,.76,-.02,-.26,-.09,.51,.46,-.13,.82,.53,.26,.01,.74,.53,.07,.11,.37,-.01,-.48,.45,.23,-.54,-.12,.9,.17,.68,.64,.61,.05,-.08,.06,.58,.79,.73,-.08,.09,-.11,-.13,.28,.76,.12,.92,-.1,.02,.31,.07,.07,.73,-.42,.09,.9,-.69,.71,.08,.08,-.21,.51,-.59,-.56,.51,-.02,.74,-.07,.92,.06,.48,0,.56,-.3,.05,-.07,.87,.16,.56,.36,.22,-.04,.69,-.01,-.01,.09,-.05,.74,.88,.84,-.02,.51,.03,.83,.57,.82,.77,.65,.03,.17,.06,.36,.53,.2,.72,-.23,.6,.66,-.67,.53,.11,.13,.42,.6,.64,.1,.41,.19,-.29,-.33,.28,.18,.53,.84,.64,-.49,-.15,.8,-.01,.49,.09,.07,.05,-.07,0,.89,.4,-.21,-.21,.27,.37,.16,-.08,.9,-.11,-.17,.7,.53,.72,.64,.22,.54,.4,.65,.2,.42,.71,.78,-.06,.04,-.17,.22,.81,.6,.16,-.21,-.43,.26,.41,.5,.49,-.13,-.16,-.17,.34,-.27,-.15,-.07,.08,-.04,.25,.34,.16,-.06,.83,.85,.27,.74,.51,.81,.65,.11,.22,.11,.68,-.36,.35,-.14,-.14,.67,.66,.29,.27,.59,-.63,-.08,.84,.76,.3,.3,.04,.53,.19,-.27,.3,-.03,.34,.07,-.09,.4,-.24,.07,.61,-.18,-.22,.64,-.12,.25,.9,.47,.76,.77,.02,-.18,.56,.09,.53,.42,-.04,.79,.1,.21,-.11,-.22,.07,.54,-.38,-.17,.08,.58,.79,.72,.76,.32,-.12,.02,-.13,.31,.28,-.35,.69,.84,.37,-.09,.27,.57,.59,-.25,-.3,-.36,.83,-.23,.94,.74,.77,-.06,.41,.6,-.04,.56,.16,.66,.73,.03,.01,.73,-.01,.78,.64,.29,.06,.53,.03,0,.15,.59,-.02,.26,.75,.6,-.38,.76,.74,.59,.15,.4,.57,.25,-.18,.67,-.02,.12,.78,-.13,.57,.36,.31,.45,.6,.43,-.11,.31,.84,-.02,.15,-.48,.17,.74,.53,.53,.86,-.13,.36,.76,.79,.71,.84,.51,.74,.92,.81,.51,.12,.39,.66,-.05,.77,.18,.95,.77,.04,.4,.87,.28,.81,.62,.12,-.24,.66,.59,.64,.4,.59,.41,.31,.03,.81,.71,.57,.88,.12,.67,.41,-.51,.86,.35,-.05,.06,.82,.63,.76,.49,.64,.14,.73,.66,.86,-.16,-.34,.45,.22,.28,.57,.43,.2,.56,-.1,.55,.53,.6,.73,.7,-.19,-.09,.58,.52,.67,.67,-.08,.01,.71,.6,.66,.91,.62,.94,.11,.92,-.25,.8,-.04,.32,-.04,.05,.07,.53,.62,.27,.65,.12,.73,-.1,.32,.84,.79,.87,.81,.84,.23,.11,.07,.52,.45,-.06,-.19,.86,.73,.81,.18,.62,.19,-.13,.59,.38,.82,.26,.11,.67,.67,.83,.76,.1,.55,.75,.88,.64,-.36,.9,.22,-.17,.92,-.18,.8,-.09,.66,.88,.04,.87,-.19,.3,.3,.47,.22,.26,.48,.19,-.1,.35,.38,-.21,0,.8,.76,.31,.21,.83,.29,.39,.75,.81,.74,-.05,-.02,.14,.82,-.07,-.5,-.12,.39,.38,.36,.72,.66,.24,-.19,.59,.61,-.4,.58,-.12,.8,.61,.4,-.29,-.19,-.08,-.19,.34,.48,.66,.63,.63,.1,.59,.54,.86,.06,.23,-.19,.02,.83,-.23,.61,.49,.72,.69,.07,.73,.52,.93,-.55,.09,-.08,.54,-.48,-.18,.23,-.71,-.16,-.1,-.05,.05,-.17,0,.79,.79,-.05,.66,.66,-.2,.62,-.07,-.61,-.69,-.07,.84,.7,.81,.45,-.12,.62,.47,.66,.81,.59,.28,.87,.74,.66,.74,.7,.47,-.12,.73,.75,.81,.28,-.45,-.04,.19,.77,.33,.79,.06,.7,.68,.84,.64,.66,.66,.82,-.03,.79,.02,-.3,.75,.37,-.14,.31,.77,.63,.94,.64,.39,.59,.59,.67,.16,-.01,.12,.04,.08,.06,.45,-.16,.28,.09,.86,-.14,.47,-.11,.16,-.01,-.08,-.25,-.18,.67,.01,.4,.51,.39,.36,.8,-.09,-.22,-.28,-.03,.81,-.06,.24,.84,.82,.44,.05,.75,.05,.85,-.07,.7,.33,.74,.72,0,.33,.25,.25,-.02,-.51,-.33,-.19,.9,.91,.77,.56,-.24,-.2,.8,.72,.42,.16,-.14,.02,.86,.63,.04,.59,.79,.36,.47,.27,.81,.8,-.49,.17,.6,.76,.72,.06,-.36,.38,.11,-.08,-.1,.69,-.2,.03,.75,.49,0,.85,.16,.02,-.1,.89,-.52,.42,.31,-.01,-.12,.05,.54,.39,-.06,0,.42,.09,.65,.78,.61,-.3,.58,.61,.73,.8,.84,.08,.22,.61,.78,.33,.04,.03,-.16,.12,.78,.82,-.06,.56,-.04,.42,.63,.02,.48,.1,.17,-.6,-.15,-.07,.03,.74,.69,.52,.74,.64,.01,.67,.26,-.01,.19,-.08,.04,.75,.64,.34,-.28,-.71,.62,.58,.29,.79,.47,.82,.5,.09,.82,-.7,.79,.86,.76,.13,.88,.27,.83,.49,.32,.5,.62,.77,.53,.69,.81,.52,-.27,.69,.13,.61,-.21,.7,.79,.75,.7,.77,0,.87,.49,.36,-.64,.7,.11,.67,-.24,-.03,.88,.53,.77,.87,-.31,.04,-.24,.18,.75,.31,.7,.55,.85,.01,-.56,.13,-.21,-.25,.08,.55,.05,.23,.76,.14,.09,.75];export{a as rvalData};
