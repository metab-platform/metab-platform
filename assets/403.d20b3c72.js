const a=[0,0,0,.95,0,.9,.02,.18,.45,0,0,.38,.35,0,0,.47,.03,.45,.05,.55,.26,0,.18,0,0,0,.03,.08,.11,.05,0,0,0,.1,.22,.27,0,0,.01,0,.23,0,0,.31,.42,.03,.95,.01,0,.06,.27,.71,0,0,0,0,.04,.11,.09,0,0,0,0,.28,.25,.06,0,0,.08,.46,.98,0,0,.17,0,.32,.05,0,0,.32,0,0,.26,0,.41,.02,0,.53,0,0,.01,.46,.36,0,.28,.26,0,.22,.08,0,.5,0,0,.19,0,.76,.06,.09,0,0,.99,0,.97,0,.26,0,.02,0,0,0,.26,.03,0,.02,.78,0,0,0,.2,0,.3,0,.23,.02,.03,.01,.5,.04,.04,.86,0,.38,0,0,.93,.66,.62,.15,0,.08,0,.76,.79,.56,.12,.08,.03,.89,.2,0,.51,0,.95,.03,.22,0,0,.01,.96,0,.83,.03,.62,.01,0,.02,.94,.08,.01,0,.67,.85,.22,0,0,.81,.12,.07,.08,.16,.23,.14,.53,0,0,0,0,0,.82,0,.06,0,0,.82,0,0,.77,.01,0,.21,.13,0,.84,0,.12,.09,.2,.52,.02,0,0,0,0,0,0,0,.75,.03,0,.09,.88,.21,.01,0,.05,.68,0,.93,.57,.74,.01,0,.01,.09,.93,.04,.05,.12,.13,.81,.24,0,0,.97,0,.63,.07,0,.09,0,.45,.3,0,0,.18,0,.07,0,.29,0,.65,.01,0,0,0,.91,.51,0,0,0,.03,0,0,0,.04,0,.05,0,.01,.03,.33,.01,0,.14,.93,0,.15,.13,.51,0,.73,0,.12,.17,.04,.16,.17,0,.51,.16,0,.57,.22,.81,.01,0,.01,.11,0,0,0,.7,0,0,.9,.09,0,.08,.64,.08,0,0,.43,.46,0,.67,.06,0,.01,.01,0,0,.25,.06,0,0,.01,.01,0,.88,0,.02,.32,.09,0,0,0,.88,0,0,.07,.27,.2,.03,.87,0,.56,0,0,.87,.49,.05,.67,.16,0,.03,.92,0,.59,.02,.9,.1,.79,.41,.69,.01,.88,.03,0,0,0,.6,.29,.83,.86,0,0,.22,.19,.92,.41,.7,0,.05,.03,0,0,0,0,0,0,0,0,0,.06,.63,0,0,.02,0,.29,0,.01,.96,.85,0,0,.24,.11,0,.01,.1,.01,.25,.13,0,.09,0,0,0,0,0,0,.05,0,0,0,0,.03,0,0,0,0,.41,.16,.47,0,0,.8,0,0,0,0,0,.87,.35,0,.46,0,0,.36,0,0,.63,.09,0,0,.24,0,0,0,0,0,.17,0,.57,0,0,.05,0,.29,.4,0,.04,0,0,.22,.15,0,.09,.19,.47,0,0,0,.04,.84,0,0,0,0,.56,0,.45,0,0,.01,.76,0,0,.53,0,.59,.37,0,.97,.29,0,.37,0,.11,.36,.35,.18,.87,.19,0,.01,.01,.22,.37,.01,.32,.2,.06,.05,.82,.32,0,.28,.03,0,0,0,0,.41,0,0,0,.13,0,.01,.38,.08,.2,.11,.97,.85,0,.42,0,0,.08,0,0,0,.11,0,.01,.43,.05,.16,0,.86,0,0,0,0,0,0,.07,.45,.15,0,.09,0,0,0,0,.15,0,0,0,.02,0,.02,.29,0,.3,.25,.1,0,.27,.1,.41,.81,0,.07,.65,.96,.99,.07,0,.55,.98,.55,.51,.1,0,0,.76,0,0,0,0,0,0,.59,.24,.01,.34,0,0,.1,0,0,0,0,.78,0,.59,0,.59,0,0,.08,0,.22,0,.39,0,0,0,.02,.07,.35,.62,.91,0,0,.02,.77,.35,.02,0,.23,0,0,0,.5,.39,.02,0,0,.95,.12,0,0,0,.03,.61,0,.18,.11,.69,.01,0,.13,0,0,0,.54,.01,0,.72,.77,.14,0,.97,.04,0,.04,.02,.08,.88,.22,.03,.13,.07,.09,.48,0,0,.99,0,0,.01,0,.04,0,0,.01,0,.1,0,.48,0,.38,.03,.68,.01,0,0,.06,.26,0,.17,0,.98,0,.27,.04,.45,.96,0,.02,.08,.09,0,.28,0,0,0,0,.05,0,0,.34,.01,.63,.07,1,0,.87,.05,0,.01,.11,0,0,0,.51,.8,0,0,0,0,0,.26,.08,0,.2,0,0,0,.05,0,0,0,0,.01,.03,0,0,0,0,.02,.01,.02,.85,.77,.08,0,0,0,.16,0,0,.49,0,.76,.45,.05,0,.81,0,.09,0,.05,.71,.66,0,.47,.59,.88,.1,.74,.01,.03,0,0,0,.09,.04,.18,0,.47,0,0,.65,.05,.02,.03,.24,.78,.16,.02,.07,.34,.08,0,0,.04,0,.06,.82,0,.56,.02,0,0,.72,.42,.06,.66,.02,.52,.13,.06,.34,.07,0,.65,0,0,.99,.05,.6,0,.02,0,0,0,0,0,.9,0,.17,0,0,0,.08,.98,.4,.65,0,.99,.17,.84,.9,.95,.05,.09,.12,0,.27,.4,.56,0,.51,.47,.15,0,0,0,0,.4,0,0,.03,.12,0,0,0,0,0,0,.39,0,0,.78,.88,.71,0,.05,.06,.08,0,.31,.53,.02,.89,.34,.09,.58,.78,0,.73,0,.05,0,.52,.01,.8,0,.92,.85,.21,0,.07,.06,.01,0,0,0,.74,.72,.02,.05,0,0,.12,0,.39,.05,.05,.02,.72,.67,0,0,.04,.1,.09,.23,.8,.99,.85,.67,.01,.66,.44,.28,.35,.79,.29,.33,.04,.23,.82,.09,0,.21,.06,.37,.26,.01,0,.02,.93,0,.21,0,0,.57,.42,0,.71,.43,.92,.63,.16,.04,.05,.99,0,0,.24,.02,.15,.19,0,0,.15,.47,.09,.91,.02,.23,0,.08,0,0,.04,.24,.13,.01,.5,.9,0,.01,.43,.67,0,0,.18,.04,.03,0,.6,.03,.02,0,0,.26,0,0,.22,0,0,.81,0,.39,.3,0,.08,.22,0,0,0,.41,0,0,.01,0,0,.05,.74,0,0,.01,0,.02,.39,0,.22,0,.48,0,.29,.11,0,0,.6,0,.02,.08,0,.12,0,.05,0,.11,.07,0,.58,.48,0,.07,.52,.12,0,0,0,.55,0,0,.18,.73,.01,0,.91,.7,.02,0,.96,0,0,0,0,.51,0,0,0,.63,.18,.85,.39,.05,.72,0,0,.14,.06,0,.08,0,0,0,0,.12,.05,0,.07,0,.38,0,.93,.01,.23,.17,.11,.74,.65,0,.27,0,0,.08,0,.4,.23,0,.56,0,.7,.1,0,0,0,.06,0,.26,0,.09,0,.01,0,0,.78,0,.35,.11,.01,0,.28,0,0,0,.36,.27,0,0,.86,.7,.02,.98,0,.12,.13,.02,.1,0,.21,0,0,0,.73,.46,.97,0,0,0,.09,.98,.67,.99,.02,0,.81,0,.53,.22,.04,.31,.06,0,0,0,0,0,0,.06,.01,.22,0,.02,.01,.02,.92,0,.35,0,.22,0,.02,0,.02,0,.12,0,.58,0,1,.47,.78,0,.81,.97,.71,.56,0,0,0,.33,.28,.11,0,0,0,0,0,.1,.44,.94,0,0,.2,0,.61,0,0,0,0,.09,.08,0,0,0,.43,.06,.07,0,.02,.47,.59,0,0,0,0,.25,0,.24,.36,.17,.63,0,.46,.36,0,.07,.01,0,.29,0,.95,.67,0,.31,.04,0,.01,0,0,.72,0,.37,0,.15,.24,0,0,.48,.25,0,.98,0,.03,.98,.43,0,.07,.01,0,.07,.43,0,.01,.02,0,.07,.03,.18,.49,.33,0,.06,.24,0,0,.09,0,.34,0,0,.05,.11,.97,0,0,.58,.16,.05,0,0,0,.32,0,0,.17,0,0,.06,.89,.77,0,.31,.62,0,.92,.04,.91,.08,.17,.05,.99,0,.02,.36,0,.13,.47,0,0,0,0,1,.1,0,.56,0,0,0,0,.72,.47,.96,.29,.7,0,0,0,.04,0,0,0,0,.81,.43,.82,.84,.15,.02,.09,0,0,.01,.15,0,0,.02,0,0,.04,0,.53,0,0,0,.49,.31,0,.71,0,.77,0,0,.98,.8,0,.01,0,0,.22,.26,.01,.76,.88,.24,0,.24,.55,0,.01,0,0,0,.07,.19,.02,0,.33,.04,0,.14,.36,0,.08,0,0,.07,0,.01,0,.76,.37,0,.22,.32,.02,.11,0,.01,.47,0,.27,.02,0,0,0,0,.07,0,0,0,.84,.56,.07,0,0,0,.01,0,0,.55,.01,0,0,0,0,.1,.41,0,0,0,.45,0,0,0,.98,0,0,.03,0,.71,0,.1,.01,0,0,.01,.07,0,0,0,.09,0,.04,0,0,0,.01,.03,.06,.67,.13,0,.07,.21,0,0,.04,0,0,0,0,.09,0,0,.21,.01,0,.35,.03,0,0,0,0,0,0,.3,0,.01,0,.1,.06,.97,.45,.99,.6,0,.27,0,.05,0,.6,.07,0,0,0,0,0,.26,.42,.29,0,0,.87,.01,0,0,0,.95,0,.23,.48,0,.24,0,.79,0,0,0,0,0,.29,0,0,0,0,0,0,.57,0,0,.14,0,.5,0,0,.54,0,.07,.79,.05,0,.33,.01,.06,.08,.91,.03,.03,.38,.78,0,0,0,.55,0,0,0,0,0,0,.85,.2,.03,0,.32,0,.27,0,0,.02,0,0,0,0,0,0,.04,.04,.72,0,0,.02,0,.7,.57,.1,.14,.1,0,0,0,.05,.01,0,0,.86,.55,.03,.82,0,.49,0,0,0,0,.1,0,0,0,.04,.05,.29,.2,0,.24,.07,0,.7,.01,.78,.79,.07,.78,0,0,.6,0,0,0,0,0,.01,0,.23,0,0,0,0,.57,0,0,0,0,.01,.47,0,0,0,0,0,0,.83,0,0,0,.18,.02,.39,.9,0,.09,0,.34,0,0,0,0,0,0,0,.91,0,.94,.04,0,.07,.1,.5,0,0,0,0,.02,0,0,0,0,.81,.31,.5,.98,.82,0,.01,.08,.74,0,.27,.01,.05,.91,.04,.9,.02,0,0,.84,.1,0,.01,.18,0,.01,0,.35,.43,0,.7,.77,0,0,0,.91,0,.03,0,.98,0,.12,0,0,.92,0,.97,0,.63,0,.01,.09,0,0,0,0,.02,.32,0,0,.01,.29,.16,.39,0,0,.78,0,0,.02,0,.03,0,0,.01,.08,0,0,0,.8,0,0,.99,.14,.58,0,.08,.56,0,.05,.89,0,.14,.66,.29,0,0,0,.11,.64,.05,.28,0,.02,.68,.28,.01,.9,0,0,0,.17,0,0,0,0,0,.77,.08,0,0,.28,.22,.28,.15,.08,0,0,0,0,.36,0,0,.67,.92,.17,.42,0,.08,.66,.67,0,0,0,0,0,.46,0,0,.24,.03,.01,0,0,0,.71,.29,0,0,0,.08,0,0,0,.03,.7,0,0,0,0,0,.21,0,0,0,0,.43,.03,0,0,0,0,0,0,.14,0,.02,0,.14,0,0,0,0,0,0,0,0,.39,0,0,.8,0,0,.54,0,0,0,0,.34,.68,.41,.55,0,.71,0,0,0,0,0,.43,.93,.09,.5,.03,.46,.38,0,.66,.31,0];export{a as pvalData};
