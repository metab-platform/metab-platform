const a=[0,0,0,.61,0,.39,0,.73,0,.19,0,.81,.92,0,0,.46,.02,.59,.09,.47,.24,0,.89,0,0,0,0,.29,0,.01,0,0,0,.13,.06,.11,0,0,0,0,.31,0,0,.39,.52,0,.19,.94,.2,.08,.13,.29,.28,0,0,0,0,.22,.84,0,0,0,0,.68,0,0,0,0,.64,.7,.1,0,0,.2,0,.41,.57,0,.03,.33,0,0,.3,0,.18,.03,0,.41,0,0,.61,.55,.01,0,.24,.48,0,.06,.49,0,.54,0,0,.78,0,.1,.97,.75,0,0,.96,.01,.82,0,.14,0,.08,0,.36,0,.2,.38,.02,.49,.8,0,0,.06,.02,0,.31,0,.2,.71,.01,.39,.78,.02,0,.85,0,.47,0,0,.74,.07,.94,.54,0,.04,0,.54,.79,.55,.81,.77,.83,.99,.05,0,.06,0,.69,0,0,0,0,0,.64,0,.74,.1,.38,.03,0,.19,.8,.11,0,0,.83,.01,.84,0,0,.72,.88,.72,.97,.15,.91,.1,.09,0,0,0,0,.49,.75,.01,.01,0,0,.68,0,0,.4,.08,0,.71,.33,0,.35,0,.25,0,.56,.43,.11,.01,0,0,0,0,0,0,.63,0,.02,.67,.31,.5,0,0,.85,.4,0,.11,.51,.35,0,0,.95,.99,.02,.12,.16,.32,.27,.67,.64,.48,0,0,0,.62,.67,0,.64,0,.59,.61,0,0,.34,0,.92,0,.02,0,.26,0,0,0,0,.72,.56,0,0,.29,.16,.02,0,0,.04,0,.23,0,.77,.05,.66,0,0,.3,.56,0,0,0,.71,.08,.53,0,.03,.05,.08,0,.16,0,.65,0,0,.54,.2,.83,.35,.09,.09,.98,0,.15,0,.42,0,0,.03,.04,0,.03,.93,.03,0,0,0,.29,0,.91,.19,0,.12,0,0,0,.05,.27,0,0,.86,.01,0,.02,0,.01,.08,.03,0,0,.01,.82,0,0,0,.33,.09,.88,.68,0,.93,0,0,.12,.38,.03,0,.71,0,.05,.11,0,.91,.5,.52,.61,.14,.37,.37,0,.19,.57,0,0,0,.76,.02,.7,.73,0,0,.17,.05,.64,.25,.06,0,0,.12,.27,0,0,0,0,0,0,.03,0,.88,.95,0,0,.14,.02,.77,0,.11,.68,0,0,0,.77,.02,0,.7,.37,0,.4,.32,0,0,0,0,0,0,0,0,.44,.53,0,0,0,.35,0,0,0,0,.17,.54,.92,.19,0,.56,0,0,0,0,0,.11,.58,0,.47,0,0,.52,0,0,.88,.34,0,0,.34,0,.01,0,0,0,0,.47,.27,.04,0,0,0,.43,.97,.03,0,0,0,0,.57,0,.79,.07,.14,0,0,0,.13,.31,0,0,0,0,.73,0,.01,.38,.89,.81,.74,0,0,.91,0,.33,.49,0,.93,.45,.14,.86,0,.29,0,.12,.07,.63,.2,.11,0,.05,.17,.47,.52,.15,.41,.79,.22,.11,.59,0,.31,.15,0,0,0,0,.06,0,.57,.06,.82,0,.06,.09,.53,.64,.04,.23,.72,.83,.31,0,0,.15,0,0,0,.37,0,.05,0,.92,.17,0,.05,0,0,0,0,.06,0,.13,.47,.5,0,.78,0,0,0,0,.21,0,0,0,.11,0,0,.4,.35,.27,.78,.29,0,.76,.16,.11,.13,0,.14,.8,.4,.74,.37,.05,.8,.4,.07,.02,.46,0,.03,.52,0,.01,.01,.01,0,0,.76,.13,.02,.65,0,0,.62,.18,0,.04,0,.69,0,.37,0,.87,0,0,.17,0,.63,.28,.85,0,0,0,.71,.1,.33,.82,.04,0,0,0,.63,.31,0,0,.01,0,0,0,.07,.25,.15,0,0,.55,.01,0,0,0,.07,.22,.13,.22,.35,.67,.01,.01,.18,0,0,0,.22,0,0,.44,.79,.14,0,.83,0,0,.62,.74,.55,.36,.42,.23,.46,.09,.49,.42,0,0,.6,0,0,0,.04,.01,0,0,.04,0,.49,0,.9,0,.79,.38,.66,0,0,0,.32,.51,0,0,0,.91,0,.16,.76,.14,0,0,.12,.23,.13,0,.22,0,0,0,.77,.02,0,0,.09,.68,.1,.32,.14,0,.74,.26,0,.63,.6,0,.11,0,.25,.54,0,0,0,0,0,.34,.05,0,.34,0,0,0,.01,0,0,.22,0,.57,0,0,0,0,0,0,0,.6,.96,.97,.53,0,.04,0,.2,0,.66,.04,0,.96,0,.39,0,.77,0,.21,.28,.9,.49,.99,0,.67,.37,.88,.59,.05,.56,.09,0,0,0,.69,.52,.22,0,.31,0,0,.78,.34,.03,0,.16,.92,.02,.64,.83,.03,.78,0,0,.28,.01,.26,.16,0,.31,.01,.13,.21,.06,.88,.28,.38,.63,.02,.23,.44,.22,0,0,.04,0,0,.81,.03,0,0,.4,0,0,0,0,0,.25,0,.03,0,0,0,.1,.96,.83,.71,0,.16,.69,.54,.58,.71,.26,.97,.01,0,0,.62,.99,.22,.7,.54,.35,0,0,0,0,.91,0,0,.6,.19,0,0,0,0,0,0,.42,0,0,.62,.99,.95,0,.22,.3,.56,0,.27,.05,.78,.93,.05,.12,.81,0,0,.75,0,.05,0,.88,.51,.66,0,.25,.5,.46,0,.1,.11,.12,0,0,0,.76,.02,.7,.01,0,0,.17,0,.21,.4,.93,0,.25,.54,.58,0,.08,.35,.14,.05,.19,.65,.19,.09,.55,.77,.79,.75,.83,.05,.17,.22,.02,.19,.68,.81,0,.1,.37,.99,.05,0,.02,.09,.36,0,.85,0,0,.95,.06,0,.99,.14,.86,.3,.64,.03,.02,.87,0,0,.66,0,.81,.45,0,.36,.57,.88,.33,.33,.02,.08,0,.7,0,0,.76,0,.04,0,.59,.27,0,.31,.95,.99,0,.19,0,.02,0,0,.37,.01,.02,0,0,.56,0,0,.35,0,0,.28,.02,.7,.45,0,.6,.33,.04,0,0,.39,.4,0,.01,0,0,.37,.01,0,0,.02,0,.01,0,0,0,0,.89,0,.38,.18,.01,0,.88,.9,.16,.12,0,.08,0,.85,0,.1,.77,.03,.43,.29,0,.99,.41,.71,0,0,.05,.08,0,0,.47,.36,.3,0,.61,.84,0,0,.79,0,.18,0,.04,.31,.05,.01,0,.32,.29,.82,.06,.48,.91,0,0,.04,.01,0,0,0,0,0,0,.01,.38,0,.07,0,.15,0,.1,0,.78,.92,.16,.75,0,0,.22,0,0,.61,0,.3,.26,0,.85,0,.34,.01,0,0,.2,.92,0,.52,0,.04,0,.38,0,.01,.69,0,.17,0,0,0,.09,.77,0,0,.04,.7,0,0,.81,.47,.38,.87,.03,.06,.7,0,0,0,.14,0,0,0,.71,.37,.91,0,0,0,.28,.63,.51,.46,.05,0,.24,0,.06,.1,.67,.08,.57,0,0,.75,0,0,0,.29,.02,.12,.58,0,0,.01,.93,0,.22,0,0,.02,.03,0,.01,.45,.26,0,.97,0,.75,0,.85,0,.26,.39,.47,0,0,0,0,0,.04,.1,0,0,0,0,0,.16,.22,.05,0,0,.43,0,.05,.21,0,0,.02,.91,.35,.11,0,0,.37,.01,.79,.02,0,.52,.83,0,0,0,.04,.38,0,0,0,.74,0,.01,.96,.89,0,0,.06,.13,0,.35,.43,.36,0,.5,.29,0,.42,0,0,.2,.05,.27,0,.78,.95,0,0,.6,.07,0,.8,0,.12,.4,.02,0,.92,.23,0,.27,0,0,0,.1,0,.68,0,.03,.72,.27,.1,.99,.78,0,0,.56,0,.03,0,0,0,.66,.07,0,.05,.98,.71,.53,0,0,0,.02,0,0,.61,0,0,.11,.16,.85,0,.43,.16,.05,.97,0,.44,.6,0,.49,.29,0,.35,.27,0,.25,.55,0,.11,0,0,.68,.11,0,.77,.04,0,.02,0,.24,.1,.17,.12,.26,0,0,.09,.23,0,0,0,0,.83,.38,.36,.16,.43,0,.02,0,0,0,.89,.33,.01,.01,.04,0,0,0,.01,0,0,0,.39,.22,0,.81,0,.02,0,0,.06,.81,0,0,0,.02,.17,.35,0,.69,.78,.29,0,.87,0,0,0,.03,0,0,0,.69,0,0,.01,.14,.01,.32,.01,0,.31,0,0,.63,.16,0,.01,.65,0,0,.63,.11,.03,.77,0,.52,0,0,.37,.82,0,0,0,0,.08,0,0,0,0,.03,.67,0,.81,0,.02,0,0,.77,.31,0,0,0,0,.05,.03,0,0,0,.69,0,.1,0,.32,0,0,0,0,.53,0,.51,.01,0,0,.02,.49,0,0,0,.01,0,0,0,0,0,.34,.15,.39,.01,.68,0,.71,.51,0,.45,0,0,0,0,0,.06,.79,0,0,0,0,.09,.7,0,0,0,0,.18,0,.46,0,.01,0,.73,.01,.79,.25,.6,0,0,.05,0,.05,.01,.85,.24,0,0,0,0,0,.7,.06,.22,.07,.03,.99,.89,0,0,0,.13,0,.42,.26,.1,.28,0,.01,.78,0,0,0,0,.47,0,0,0,0,0,0,0,0,0,.03,0,.1,0,0,.91,0,.32,.13,0,.27,.67,0,0,.43,.87,.72,0,.85,.83,0,0,0,.03,0,0,0,0,0,0,.72,.82,.19,0,.64,.01,.95,.26,.32,.48,0,0,.02,.61,0,0,.24,0,1,0,0,0,.02,.44,.87,.64,.22,.19,0,0,0,.02,0,.05,0,.76,.24,.05,.82,0,.13,0,0,0,0,.8,0,0,0,0,.22,.29,0,0,.12,.48,0,.69,.24,.55,.65,.03,.38,0,0,.17,0,0,.51,0,0,0,0,.72,0,0,0,0,.23,0,0,0,0,0,0,0,0,0,0,0,0,.43,0,0,0,.98,.1,.45,.26,0,0,0,.64,0,0,0,0,0,0,0,.59,0,.94,0,0,.75,.74,.96,0,0,0,0,.42,0,.02,0,.99,.89,.21,.74,.72,1,0,.01,.3,.04,0,.13,0,0,.3,.2,.68,.03,.99,0,.35,.58,0,.31,.02,0,0,0,0,.59,0,.32,.2,0,0,.02,.08,0,.22,0,.83,0,.87,0,0,.85,0,.08,0,.46,0,.04,.32,0,0,0,0,.05,.7,0,0,0,.39,.36,.52,0,0,.37,0,0,0,.02,.58,0,0,.01,.54,0,0,0,.91,.02,0,0,.36,.87,0,0,.95,0,.08,.44,0,.73,.78,.27,0,0,0,.86,.93,.14,.48,0,0,.69,.3,.18,.98,0,0,0,.92,0,0,0,0,0,.82,.54,0,0,.81,.02,1,.27,.63,0,0,.03,0,.07,.05,0,.07,0,.63,.62,0,.22,.29,.49,0,0,0,0,0,.42,0,.62,.18,.5,.5,.97,0,0,.06,.31,0,.01,0,0,0,.14,0,0,.46,0,0,0,0,0,.13,0,.58,0,0,.23,0,0,0,.02,0,0,0,.49,0,0,0,.55,0,0,0,0,0,0,0,0,.09,0,0,.7,0,0,.76,0,0,0,0,.22,.83,.55,.28,0,.16,0,0,0,.93,0,.39,.08,.9,.21,0,.55,.61,0,.52,.29,0];export{a as pvalData};
