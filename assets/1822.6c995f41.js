const a=[.35,.85,.03,.32,.14,.28,.49,.6,.55,.12,.63,0,.51,.21,.12,.49,.73,1,.75,.74,.06,.1,.51,.52,.3,.32,.06,.8,.45,.33,.76,.08,.18,.78,.79,.11,.08,.42,.84,.54,.1,.56,.17,.75,.13,.55,.65,.21,.92,.75,.05,.11,.01,.06,.06,.39,.52,.62,.68,.84,.56,.19,.14,.48,.4,.24,.2,.19,.41,.51,.65,.69,.93,.25,.13,.31,.07,.54,.06,.19,.67,.36,.28,.55,.09,.67,.42,.64,.79,.5,.28,.66,.59,.45,.01,.04,.12,.71,.06,.69,0,.03,.08,0,.46,.8,.49,.89,.07,.25,.92,.9,.46,.03,.01,.05,.29,.54,.63,.69,.3,.78,.16,.06,.35,.52,.06,.29,.52,.33,.87,.53,.2,.53,.37,.72,.57,.15,.16,.25,.38,.33,.85,.39,.15,.56,.36,.14,.19,.62,.07,.93,.64,.98,.94,.61,.61,.04,.42,.21,.8,.11,.08,.32,.55,.2,.23,.32,.22,.8,.03,.56,.58,.53,.11,.19,.48,.36,.51,.39,.16,.88,.04,.32,.91,.71,.78,.51,.69,.09,.74,.79,.07,.54,.36,.02,.22,0,.3,.02,.9,.5,.33,.52,.05,.22,.39,.69,.85,.51,.84,.47,.04,.34,.72,.17,.81,.67,.28,.7,.05,.75,.87,.15,.25,.32,.59,.25,.09,.74,.7,0,.77,.02,.87,.07,.24,.43,.94,0,.59,.3,.57,.29,.55,.96,.04,.06,.02,.02,.95,.61,.03,.72,.13,.34,.32,.98,.83,.07,.23,.52,.15,.29,.68,.55,.18,.34,.88,.86,0,.44,.17,.02,.17,.8,.15,.77,.12,.8,.56,.83,.3,.48,.08,.48,.54,.23,.11,.01,.37,.24,.42,.72,.5,.18,.69,.06,.8,.04,.56,.09,.06,.07,.03,.3,.08,.83,.66,.57,.86,0,.86,.2,0,.08,.08,.34,.03,.46,.61,0,.09,.17,.87,.45,.08,.67,.17,.28,.03,.36,.28,.14,.99,.47,.55,.2,.92,.11,.34,.34,.82,.29,.07,.1,.95,.99,.29,.52,.2,.57,.36,.12,.21,.23,.96,.91,.05,.11,.9,.74,.5,.6,.02,.2,.19,.2,.74,.28,.11,.39,.44,.66,.52,.01,.98,.35,.87,.62,.91,.45,.01,.97,.63,.2,.4,.97,.12,.08,.02,.01,.85,.67,.71,.07,.63,.89,.41,.42,.22,.77,.1,.81,.11,.24,.26,.06,.18,.02,.02,.19,.12,.01,.03,.72,.17,.05,.68,.05,.42,.29,.47,.4,.97,.18,.19,.54,.68,.28,.23,.52,.76,.57,.2,.23,.53,.07,.1,.03,.32,.97,.88,.35,.71,.66,.22,.29,.78,.56,.79,.79,.27,.73,.93,.47,.44,.17,.46,.97,.06,.02,.13,.47,.21,.03,.02,.3,.94,.02,.81,.24,.06,.37,.84,.07,.12,.93,.02,.61,.35,.1,.04,.41,.57,.99,.01,.44,.37,.06,.18,0,.49,.74,.05,.3,.23,.8,.17,.85,.3,.2,.02,.51,.39,0,.37,.05,.17,.9,.41,.2,.86,.86,.63,.95,.26,.58,.6,.11,.42,.03,.21,.44,.72,.02,.28,.74,.17,.16,.91,.27,.02,.68,.04,.69,.46,.11,.97,0,.11,.57,.43,.04,.8,.92,.68,.07,.06,.62,.51,.22,.06,.04,.95,.58,.23,.77,.01,.31,.05,.58,.97,.88,.54,.5,.49,1,.4,.96,.01,.01,.22,.27,.32,.05,0,.11,.05,.84,.97,.13,.15,.31,.06,.28,.12,.83,.71,.1,.04,.13,.12,.66,.47,.4,.11,.2,.24,.35,.08,.22,.05,.4,.04,.55,.33,.71,.05,.46,.72,.09,.58,.62,.2,0,.11,.8,.89,.36,.23,.83,.32,.84,.28,.03,.75,.63,.26,.79,.95,.72,.72,.28,0,.13,.04,.26,.78,.12,.28,.74,.89,.84,0,.14,.92,.33,.27,.12,.26,.26,.97,.03,.1,.66,.08,.25,0,.18,.09,.13,.14,.25,.36,.12,.18,.42,.49,.37,.93,.42,.51,.18,.05,.59,.95,.12,.15,.86,.88,.85,.47,.17,.79,.4,.97,.48,.07,.73,.43,.3,.58,.18,.52,.93,.08,.35,.02,.87,.5,.89,.57,1,.14,.03,.06,.02,.4,.21,.23,.13,.02,.26,.48,0,.81,.25,.37,.1,.6,.06,.09,.28,.82,.54,.96,.65,.3,.01,.7,.01,.11,.08,.78,.61,.24,.44,.88,.37,.28,.02,.3,.17,.25,.88,.7,.11,.07,.6,.22,.16,.1,.77,.13,.24,.2,.07,.01,.61,.13,.34,.04,.01,.25,0,.14,.68,.11,.39,.69,.8,.15,.11,.76,.49,.03,.58,.26,.43,.22,.01,.73,.34,.02,.1,.88,.39,.1,.84,.56,.39,.14,.13,.33,.53,.04,1,0,.82,.61,.63,.03,.08,.04,.29,.67,.21,.3,.95,.07,.27,.08,.51,.16,.17,.01,.47,.46,.25,.28,.95,.73,.32,.81,.32,.65,.03,.63,.34,.52,.34,.79,.39,.44,.01,.8,.38,.1,.26,.14,.72,.93,.15,.39,.06,.84,.43,.84,.22,.36,.48,.93,.59,.57,.93,.4,.39,.34,.18,.27,.08,.52,.17,.71,.93,.5,.17,.35,.52,.19,.23,.15,.63,.5,.17,.78,.16,.79,.57,.12,.06,.68,.73,.48,.57,.97,.02,.08,.62,.55,.3,.14,.37,.06,.27,.98,.67,.11,.17,.25,.27,.17,.01,.12,.17,.04,.74,.11,.68,.35,.14,.92,.55,.37,.82,.47,.16,.32,.13,.74,.78,.07,.15,.1,.07,.02,.27,.11,.2,.65,.07,.04,.36,.7,.04,.88,.33,.35,.28,.25,.02,.08,.4,.28,.82,.52,.06,0,.65,.84,.59,.64,.04,.95,.95,.38,.88,.26,.48,.1,.89,.76,.04,.13,.82,.8,.18,.35,.18,.16,.8,.22,.15,.26,.83,.12,.12,.63,.1,.14,.95,.99,.98,.43,.58,.3,.11,.14,.03,.15,.87,.92,.81,.06,.84,.03,.12,.01,.47,.94,.98,.3,.35,.61,.49,.26,.73,.06,.08,.65,.17,.74,.92,.38,.57,.85,.66,.9,.74,.54,.58,.44,.03,.79,.9,.34,.27,.25,.41,.44,.04,.24,.05,.88,.07,.32,.44,.96,.51,.66,.14,.49,.77,.03,.7,.12,.16,.52,.03,.73,.09,.01,.24,.42,.4,.6,.58,.54,.25,.85,.06,.96,.52,.44,.9,.27,.35,.12,.15,.67,.57,.26,.25,.08,.67,.06,.94,.28,.33,.38,.08,.15,.22,.53,.49,.66,.23,.2,.7,.55,.01,.16,.35,.04,.28,.75,.81,.13,.09,.86,.51,.34,.35,.44,.57,.27,.03,.03,.01,.01,.32,.3,.84,.71,.83,.7,.56,.35,.31,.38,.29,.35,.66,.45,.67,.19,.12,.38,.67,.14,.13,.12,.05,.16,.14,.14,.78,.1,.87,.12,.4,.49,.76,.13,.29,.11,.66,.07,.67,.79,.29,.87,.02,.56,.67,.27,.93,.36,.13,.47,.84,.22,.55,.05,.63,.09,.25,.06,.7,1,.51,.97,.29,.03,.78,.22,.75,.62,.51,.8,.81,.9,.33,.19,.28,.18,.21,.99,.04,.97,.94,.58,.52,.15,.46,.71,.07,.08,.12,.8,.03,.02,.08,.15,.17,.88,.03,.22,.69,.03,.83,.02,.31,.03,.85,.69,.46,.72,.33,.94,.69,.39,.31,.61,.14,.73,.91,.51,.54,.49,.36,.1,.92,.09,.2,.45,.49,.23,.21,.22,.25,.04,.42,.2,1,.56,.5,.33,.34,.13,0,.36,.24,.3,.75,.65,.38,.55,.04,.7,.14,.79,.77,.74,.02,.53,.3,.53,.1,.06,.64,.07,.89,.01,.81,.13,.25,.5,0,.08,.21,.04,.91,.17,.77,.11,.83,.22,.37,.16,.46,.51,.12,.76,.91,.12,.06,.81,.21,.22,.51,.79,.45,.99,.09,.46,.58,.3,.01,.26,.27,.11,.85,.28,.9,.22,.59,.19,.34,.52,.7,.04,.07,.66,.4,.18,.62,.29,.67,.88,.2,.51,1,.56,.2,.86,.37,.83,.29,.73,.03,.5,.79,.02,.21,.39,.23,.12,.05,.92,.37,.03,.27,.15,.22,.45,.92,.88,.94,.06,.13,.21,.2,.62,.15,.22,.5,.74,.57,.67,.03,.41,.02,.94,.06,.66,.95,.89,.94,.27,.51,.3,.18,.19,.04,.94,.17,.58,.08,.44,.02,.33,.23,.22,.39,.45,.27,.17,0,.2,.13,.47,.12,.05,.27,.8,.14,.34,.71,.42,.16,.03,.02,.68,.19,.28,.05,.97,.27,.13,.65,.03,.62,.31,.85,.15,.31,.56,.22,.31,.33,.1,.75,.8,.34,.66,.27,.85,.36,.65,.02,.73,.54,.35,.9,.87,.29,.1,.01,.78,.26,.08,.7,.36,.98,.27,.09,.12,.01,.58,.1,.11,.33,.15,.12,.06,.04,.01,0,.82,.65,.81,.11,.23,.35,.17,.01,.2,.17,.05,.05,.95,.17,.3,0,.01,.01,.76,.73,.63,.03,.61,.73,.32,.85,.34,.37,.1,.07,.19,.33,.27,.55,.97,.12,.17,.08,.96,.15,.19,.16,0,.63,0,.02,.77,.1,.41,.33,.88,.53,.67,.08,.74,.92,.38,.49,.03,.97,.85,.63,.59,.1,.14,.1,.33,.09,.37,.13,.33,.53,.05,.22,.31,.38,.14,.3,.9,.54,.56,.97,.18,.19,.31,.47,.13,.12,.59,.97,.52,.98,.18,.3,.19,.32,.11,.82,.16,.99,.24,.01,.62,.06,.19,.18,.97,.51,.23,.16,.23,.04,.02,.36,.22,.6,.46,.62,.06,.39,.25,.85,.97,.69,.45,.22,.09,.81,.01,.45,.41,.54,.11,.77,.05,.13,.03,.51,0,.68,.53,.06,.26,.39,.81,.02,.95,.18,.08,.35,.92,.18,.06,.08,.23,.51,.81,.94,0,.62,.02,.21,.02,.65,.37,.08,.37,.12,.22,.58,.33,.46,.81,.62,.93,.8,0,0,0,.34,.5,.85,.6,.43,.63,.47,.01,.73,.12,.92,.87,.24,.19,.4,.23,.47,.01,.21,.15,.75,.72,.45,.47,.27,.18,.03,.13,.04,.02,.09,.27,.7,.19,.82,.99,.6,.72,.42,.23,.72,.25,.79,.7,.34,.16,.09,.1,.1,.86,.03,.22,.41,.1,.31,.18,.87,.41,.47,.34,.06,0,.42,.93,.91,.92,.15,.04,.1,.86,.39,.06,.35,.81,.95,.17,.1,.57,.42,.5,.14,.12,.15,.02,.01,.43,.07,.96,.27,.76,.21,.11,.68,0,.25,.07,.83,.01,.47,.06,.1,.09,.91,.42,.24,.5,.82,.34,.42,.53,0,.93,.1,.48,.16,.95,.66,.59,.48,.1,.45,.13,.44,.05,.26,.07,.6,.43,.72,.83,.14,.12,.16,.63,.82,.02,.01,.17,.75,.48,.63,.26,.14,.02,.47,.53,.17,.01,.79,.32,.11,.29,.44,.82,.3,.6,.12,.17,.32,.4,.07,.8,.09,.09,.19,.05,.02,.07,.57,.84,.05,.31,0,.5,.37,.2,.21,.44,.88,.2,.01,.08,.96,.69,.59,0,.28,.22,.26,.37,.53,.04,.1,.1,.62,.09,.66,.82,.07,.38,.7,.29,.03,.56,.01,.88,.49,.73,.33,.27,.13,.35,.17,.12,.72,.44,.04,0,.02,.29,.23,.16,.43,.27,.12,.62,.26,.01,0,.35,.13,.37,.11,.05,.9,.14,.1,.12,.24,.65,.47,.82,.39,.85,.04,.25,.81,.27,.05,.13,0,.34,.47,.2,.01,.05,.52,.5,.16,.45,.97,.09,.23,.42,.27,.81,0,.54,.22,.22,.05,.74,.94,.89,.35,.44,.4,0,.1,.65,.61,.3,.63,.62,.18,.23,.19,.55,.04,.53,.64,.18,.14,.06,.54,.09,.04,.35,.25,.18,.46,.44,.8,.64,.28,.89,.25,.2,.6,.21,.4,.51,.19,0,0,.1,1,.77,.11,.03,.66,.53,.92,.33,.86,.08,.66,.04,.92,.09,.2,.01,.48,0,.62,.4,.47,.27,.54,.81,.3,.01,.11,.11,.02,.21,.24,.35,.61,.29,.32,.3,.12,.19,.03,.28,.93,.2,.08,.95,.69,.02,.32,.02,.19,.39,.12,.93,.31,.21,.46,.99,.18,.43,.16,.45,.36,.69,.31,.06,.2,.4,.39,.07,.13,.73,.37,.27,.05,.26,.06,.54,.57,.13,.69,.05,.32,.23,.03,.21,.75,.43,.26,.81,.1,.21,.59,.26,.89,.17,.06,.29,.39];export{a as pvalData};
