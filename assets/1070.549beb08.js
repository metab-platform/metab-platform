const a=[.62,0,.34,.79,.46,.54,.34,.68,.49,.44,.08,.24,.25,.22,.09,.42,.86,.42,.03,.16,.37,.6,.12,.49,.12,.46,.99,.67,.66,.9,.3,.69,.18,.24,.13,.26,.09,.12,.11,.73,.03,.63,.26,.41,.42,.33,.33,.08,.64,.83,.78,.35,.29,.39,.54,.15,.09,.29,.29,.25,.69,.65,.57,.17,.87,.84,.34,.23,.82,.51,.27,.89,.34,.96,.79,.07,.33,.78,.95,.42,.25,.4,.99,.74,.53,.84,.41,.34,.51,.24,.52,.33,.2,.27,.68,.44,.64,.55,.98,.7,.88,.48,.74,.22,.55,.57,.04,.66,.13,.22,.8,.44,.82,.16,.32,.53,.43,.92,.17,.19,.04,.38,.8,.07,.99,.93,.72,.75,.27,.27,.52,.94,.58,.81,.31,.99,.52,.75,.7,.23,.49,.21,.74,.35,.53,.49,.11,.61,.41,.07,.41,.5,.95,.4,.79,.88,.1,.98,.91,.15,.8,.84,.85,.51,.2,.96,.44,.82,.9,.34,.88,.07,.21,.45,.32,.47,.98,.83,.86,.26,.15,.77,.57,.94,.72,.72,.31,.89,.86,.91,.58,.52,.27,.26,.31,.11,.46,.72,.96,.8,1,.14,.18,.79,.93,.42,.93,.83,.49,.28,.93,.31,.95,.26,.25,.33,.32,.46,.69,.21,.54,.78,.56,.31,.55,.28,.9,.63,.64,.34,.9,.15,.5,.46,.97,.82,.16,.61,.51,.21,.82,.26,.49,.71,.51,.62,.39,.29,.78,.73,.6,.58,.71,.83,.5,.19,.66,.68,.05,.84,.83,.38,.18,.39,.72,.41,.92,.8,.96,.84,.61,.75,.13,.51,.45,0,.89,.91,.28,.6,.83,.4,.53,.32,.82,.33,.43,.07,.69,.68,.49,.73,.08,.49,.65,.25,.34,.73,.83,1,.03,.4,.94,.13,.1,.63,.37,.83,.77,.58,.6,.44,.71,.5,.98,.92,.53,.81,.59,.73,.72,.94,.24,.53,.47,.76,.25,.14,.18,.44,.16,.94,.67,.12,.87,.79,.78,.81,.16,.31,.3,.21,.64,.46,.33,.54,.46,.74,.25,.26,.46,.15,.59,.75,.5,.27,.42,.66,.68,.96,.94,.36,.73,.39,.31,.31,.15,.17,.64,.41,.59,.08,.83,.54,.8,.5,.31,.86,.89,.54,.87,.45,.38,.9,.3,.76,.31,.94,.3,.26,.65,.44,.92,.16,.12,.25,.58,.68,.08,.99,.75,.2,.6,.51,.19,.32,.35,.78,.97,.64,.24,.98,.21,.48,.63,.41,.61,.19,.82,.46,.57,.81,.91,.29,.75,.33,.21,.63,.59,.94,.61,.74,.19,.3,.82,.63,.73,.22,.19,.37,.69,.72,.8,.73,.6,.18,.31,.31,.93,.94,.07,.66,.28,.16,.89,.74,.38,.19,.42,.16,.65,.09,.31,.47,.4,.12,.49,.65,.37,.2,.23,.16,.16,.83,.93,.05,.1,.19,.13,.78,.48,.26,.55,.17,.29,.37,.2,.6,.47,.76,.82,.37,.85,.85,.16,.21,.25,.55,.06,.88,.66,.03,.96,.89,.8,.01,1,.05,.19,.61,.4,.75,.99,.84,.95,.86,.84,.55,.59,.55,.96,.18,.01,.41,.89,.99,.27,.69,1,.09,.82,.54,.88,.46,.58,.48,.97,.66,.46,.73,.06,.82,.55,.84,.2,.67,.35,.79,.95,.18,.25,.28,.28,.62,.45,.98,.27,.61,.6,.38,.52,.14,.49,.64,.37,.02,0,.87,.98,.73,.7,.4,.82,.77,.53,.26,.8,.93,.36,.78,.17,.63,.75,.52,.33,.17,.11,.99,.84,.08,.19,.55,.01,.72,.79,.21,.1,.74,.74,.26,.09,.62,.42,.44,.34,.94,.92,.14,.41,.1,.61,.12,.44,.34,.15,.17,.28,.57,.45,.86,.61,.98,.33,.79,.77,.54,.76,.96,.44,.96,.43,.84,.2,.31,.44,.99,.05,.58,.49,.94,.68,.37,.53,.41,.43,.47,.67,.58,.93,.58,.72,.45,.67,.15,.05,.64,.51,.73,.27,.21,.28,.24,.25,.89,.2,.87,.27,.33,.41,.87,.82,.97,.49,.85,.82,.51,.94,.47,.33,.48,.63,.62,.69,.5,.53,.57,.42,.59,.23,.17,0,.26,.76,.77,.23,.91,.13,.53,.78,.74,.79,.52,.4,.8,.34,.15,.17,.76,.7,.93,.08,.85,.8,.08,.02,.41,.73,.12,.63,.49,.56,.21,.06,.44,.59,.24,.91,.97,.81,.92,.52,.98,.19,.28,.66,.61,.16,.79,.66,.9,.24,.14,.76,.99,.29,.31,.62,.14,.79,.88,.91,.25,.47,.08,.31,.85,.54,.87,.33,.12,.87,.88,.06,.78,.67,.31,.31,.92,.84,.52,.77,.58,.56,.78,.81,.36,.56,.4,.18,.73,.38,.17,.56,.66,.57,.72,.57,.99,.44,.64,.89,.77,.48,.47,.22,.61,.18,.98,.09,.87,.57,.72,.57,.34,.01,.77,.08,.82,.67,.21,.57,.83,.28,.44,.55,.8,.23,.62,.22,.31,.58,.62,.55,.44,.61,.22,1,.44,.47,.03,.42,.17,.94,.98,.22,.94,.21,.53,.82,.67,.26,.16,.67,.92,.38,.48,.23,.43,.36,.51,.81,.73,.62,.78,.32,.83,.91,.68,.27,.04,.35,.14,.25,.08,.45,.78,.47,.6,.79,.95,.62,.86,.04,.96,.83,.6,.46,.83,.86,.33,.48,.07,.77,.74,.8,.46,.92,.42,.35,.62,.74,.12,.27,.81,.64,.5,.27,.13,.46,.15,.19,.11,.59,.79,.99,.14,.92,.95,.86,.78,.35,.94,.64,.53,.94,.69,.82,.97,.95,.77,.74,.82,.41,.99,.31,.64,.39,.47,.62,.6,.29,.35,.21,.66,.84,.25,.91,.57,.6,.29,.66,.33,.7,.31,.68,.64,.39,.13,.27,.92,.61,.54,.63,.2,.77,.98,.32,.8,.97,.04,.15,.36,.73,.25,.11,.95,.07,.13,.32,.43,.05,.69,.13,.46,.55,.69,.87,.93,.62,.08,.38,.92,.98,.52,.12,.62,.45,.39,.95,.99,.6,.53,.88,.87,.13,.53,.31,.82,.03,.41,.96,.16,.57,.77,.77,.5,.21,.39,.05,.18,.51,.15,.33,.13,.69,.53,.04,.41,.44,.96,.88,.49,.09,.51,.58,.68,.15,.26,.95,.16,.53,.51,.21,.64,.03,.28,.14,.44,.64,.45,.93,.15,.78,.23,.38,.83,.58,.93,.34,.58,.95,.04,.71,.12,.68,.41,.78,.78,.97,.18,.65,.86,.23,.23,.51,.54,.77,.5,.24,0,.92,.22,.86,.35,.86,.53,.29,.48,.96,.5,.54,.57,.04,.66,.83,.91,.08,.06,.7,.47,.5,.06,.22,.46,.58,.74,.54,.33,.21,.13,.6,.63,.04,.8,.42,.19,.07,.22,.29,.92,.68,.65,.92,.1,.8,.6,.29,.1,.92,.23,.15,.29,.5,.43,.38,.6,.3,.51,.73,.87,.29,.28,.24,.06,.98,.52,.13,.88,.91,.85,.32,.32,.29,.15,.4,.58,.1,.6,.48,.87,.02,.95,.27,.73,.89,.7,.46,.56,.49,.24,.08,.11,.2,.88,.14,.9,.18,.79,.67,.31,.5,.33,.4,.31,.28,.33,.2,.35,.95,.1,.81,.06,.25,.44,.69,.59,.35,.15,.4,.65,.2,.39,.69,.81,.08,.9,.23,.49,.56,.77,.21,.06,.22,.38,.67,.61,.99,.57,.53,.63,.2,.98,.12,.37,.87,.63,.62,.61,.81,.77,.69,.43,.31,.45,.52,.7,.9,.57,.65,.55,.73,.45,.27,.9,.35,.04,.83,.77,.65,.59,.14,.69,.44,.1,.48,.07,.66,.56,.23,.68,.32,.14,.07,.88,.12,.87,.9,.03,.69,.37,.98,.26,.61,.45,.89,.8,.35,.63,.95,.86,.72,.62,.39,.32,.81,.95,.46,.92,.22,.28,.66,.83,.07,.75,.29,.3,.51,.75,.46,.77,.52,.53,.75,.79,.36,.76,.36,.21,.09,.82,.16,.42,.42,.82,.93,.35,.72,.48,.38,.78,.81,.42,.42,.81,.94,.66,.99,.21,.51,.25,.49,.78,.05,.77,.74,.93,.78,.7,.97,.21,.39,.2,.67,.75,.1,.44,.84,.86,.55,.21,.08,.9,.29,.14,.16,.14,.28,.76,.83,.91,.99,.9,.39,.81,.69,.96,.71,.9,.49,.91,.18,.36,.78,.34,.65,.38,.6,.96,.37,.91,.03,.18,.34,.22,.66,.22,.69,.77,.86,.42,.42,.34,.31,.6,.18,.08,.59,.15,.94,.69,.86,.35,.49,.74,.23,.04,.8,.68,.16,.71,.8,.16,.4,.78,.57,.28,.25,.35,.24,.64,.34,.59,.81,.73,.04,.17,.29,.28,1,.06,.27,.14,.67,.44,.32,.21,.07,.01,.95,.19,.71,.45,.51,.85,.59,.34,.54,.89,.72,.24,.66,.1,.84,.61,.86,.81,0,.15,.44,.14,.21,.77,.71,.2,.69,.85,.37,.36,.54,.08,.34,.24,.92,.27,.32,.68,.96,.18,.43,.53,.61,.05,.93,.69,.55,.03,.74,.3,.47,.11,.72,.55,.24,.94,.76,.8,.97,.07,.88,.75,.75,.31,.23,.31,.05,.91,.6,.93,.46,.25,.81,.19,.46,.64,.96,.2,.34,.61,.07,.31,.25,.23,.81,.51,.44,.04,.87,.1,.03,.18,.42,.42,.88,.47,.02,.66,.57,.9,.74,.57,.89,.94,.93,.51,.5,.33,.33,.47,.71,.24,.31,.83,.75,.39,.39,.71,.25,.14,.81,.54,.98,.06,.8,1,.34,.43,.73,.84,.67,.84,.11,.9,.63,.42,.79,.47,.61,.86,.21,.74,.49,.63,.27,.76,.57,.02,.97,.69,.66,.21,.28,.5,.49,.73,.57,.12,.3,.85,.57,.57,.89,.23,.23,.93,.47,.86,.25,.99,.59,.16,.65,.13,.57,.31,.31,.73,.26,.24,.37,.22,.43,.45,.06,.41,.25,.23,.47,.72,.43,.54,.23,.33,.36,.61,.4,.45,.24,.82,.4,.34,.3,.29,.42,.14,.57,.26,.59,.53,.18,.37,.12,.71,.72,.82,.46,.98,.58,.57,.32,.73,.91,.61,.99,.74,.61,.3,.38,.35,.98,.38,.06,.32,.41,.35,.55,.36,.37,.42,.56,.58,.63,.88,.23,.84,.55,.66,.91,.64,.36,.48,0,.51,0,.13,.26,.4,.53,.53,.71,.54,0,.38,.17,.55,.31,.7,.27,.4,.6,.69,.09,.15,.09,.56,.3,.38,.07,.51,.51,.25,.95,.15,.63,.51,.92,.31,.39,.81,.9,.19,.89,.32,.86,.81,.56,.02,.03,.19,.08,.3,.59,.75,.33,.21,.84,.07,.46,.33,.91,.19,.91,.48,.04,.75,.43,.54,.92,.51,.26,.8,.16,.92,.31,.35,.88,.28,.13,.34,.97,.65,.71,.69,.88,.88,0,.71,.12,1,.66,.44,.04,.28,.29,.65,.71,.66,.68,.22,.08,.11,.26,.26,.31,.37,.52,.55,.64,.56,.88,.89,.16,.27,.17,.44,1,.88,.03,.67,.81,.32,.3,.57,.27,.59,.35,.25,.65,.65,.16,.11,.43,.8,.31,.33,.36,.49,.49,.48,.48,.14,.96,.15,.14,.09,.11,.3,.25,.42,.49,.88,.3,.59,.79,.77,.22,.48,.34,.05,.11,.24,.23,.19,.27,.34,.12,.4,.35,.42,.01,.13,.19,.74,.89,.75,.41,.49,.93,.23,.88,.56,.16,.17,.94,.38,.72,.98,.3,.16,.81,.97,.48,.52,.23,.38,.9,.84,.2,.25,.68,.5,0,.04,.69,.56,.72,.36,.36,.6,.24,.72,.7,.55,.55,.94,.25,.54,.61,.18,.11,.48,.51,.58,.93,.62,.4,.7,.7,.34,.29,.52,.55,.68,.66,.62,.12,.45,.82,.38,.75,.32,.89,.92,.78,.63,.26,.92,.23,.35,.94,.43,.5,.04,.33,.98,.46,.13,.67,.6,.76,.6,.11,.18,.62,.1,.57,.49,.5,.72,.32,.83,.58,.4,.75,.91,.27,0,0,.69,.51,.3,.89,.44,.53,.71,.27,.07,.26,.59,.24,.43,.33,.06,.84,.31,.38,.62,.19,.79,.53,.77,.64,.73,.51,.87,.25,.5,.13,.49,.73,.72,.96,.3,.28,.36,.81,.27,.78,.8,.18,.61,.68,.28,.25,.15,.63,.39,.46,.51,.57,.78,.37,.3,.35,.16,.59,.21,.2,.2,.93,.55,.85,.14,.49,.46,.26,.62,.92,.7,.08,.4,.06,.34,.85,.15,.97,.6,.63,.58,.83,.41,.46,.23,.6,.61,.28,.17,.09,.47,.51,.96,.71,.89,.92,.19,.06,.77,.49,.41,.22,.88,.36,.53];export{a as pvalData};
